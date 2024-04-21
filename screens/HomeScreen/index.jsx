import React from 'react';
import { View, Text, Button } from 'react-native';

const styles = {
  container: {
    backgroundColor: 'black',
    minHeight: '100%',
  },
};

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Go to Users"
        onPress={() =>
          navigation.navigate('Users')
        }
      />
      </View>
  )
}

export default HomeScreen;