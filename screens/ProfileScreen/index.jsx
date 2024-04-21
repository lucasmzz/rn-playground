import React from 'react';
import { View, Text } from 'react-native';

const styles = {
  container: {
    backgroundColor: 'black',
    minHeight: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    color: 'white',
  },
};

const ProfileScreen = ({ route }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>This is {route.params.user.name}'s profile</Text>
    </View>
  )
}

export default ProfileScreen;