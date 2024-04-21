import React from 'react';
import { View } from 'react-native';
import UserList from './components/UserList';

const styles = {
  container: {
    backgroundColor: 'black',
    minHeight: '100%',
  },
};

const UsersScreen = () => {
  return (
    <View style={styles.container}>
        <UserList />
    </View>
  )
}

export default UsersScreen;