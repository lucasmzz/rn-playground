import React, { useState } from 'react';
import HomeScreen from './screens/HomeScreen';
import UsersScreen from './screens/UsersScreen';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import Header from './components/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const queryClient = new QueryClient();

const UsersStackNavigator = () => {
  return (
    <Stack.Navigator 
      mode="modal"
      screenOptions={{
        headerShown: false,
        cardStyle: { backgroundColor: 'transparent' },
        cardStyleInterpolator: ({ current: { progress } }) => ({
          cardStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
          overlayStyle: {
            opacity: progress.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 0.5],
              extrapolate: 'clamp',
            }),
          },
        }),
      }}
    >
      <Stack.Screen name="UsersList" component={UsersScreen} />
      <Stack.Screen name="UserProfile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

const MainNavigator = ({ isLoggedIn, handleLogout }) => (
  <Tab.Navigator
    sceneContainerStyle={{ backgroundColor: 'black' }}
    screenOptions={({ route }) => ({
      header: props => <Header {...props} isLoggedIn={isLoggedIn} handleLogout={handleLogout} />,
      tabBarStyle: {
          height: 40,
          paddingHorizontal: 5,
          paddingTop: 0,
          backgroundColor: 'black',
          position: 'absolute',
          borderTopWidth: 2,
          borderTopColor: 'gray',
      },
      tabBarActiveTintColor: 'greenyellow',
      tabBarInactiveTintColor: 'whitesmoke',
      tabBarShowLabel: false,
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        switch (route.name) {
          case 'Home':
            iconName = 'home';
            break;
          case 'Users':
            iconName = 'people';
            break;
          default:
            iconName = 'albums';
            break;
        }

        iconName += focused ? '' : '-outline';
        
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Users" component={UsersStackNavigator} />
  </Tab.Navigator>
);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const validateUser = (username, password) => {
    if (username === 'gato' && password === 'gato') {
      setIsLoggedIn(true);
      return true;
    } else {
      return false;
    }
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor="black" style="light" />
      <QueryClientProvider client={queryClient}>
        {
          isLoggedIn 
          ? <MainNavigator isLoggedIn={isLoggedIn} handleLogout={() => setIsLoggedIn(false)}/>
          : <LoginScreen handleLogin={validateUser} />
        }
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;