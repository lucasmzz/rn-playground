import React from 'react';
import { View, Button } from 'react-native';
import GatoLogo from '../../assets/gato-logo.svg';

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


const LoginScreen = ({ handleLogin }) => {
    const onPressLogin = () => {
        const username = 'gato';
        const password = 'gato';

        const response = handleLogin(username, password);
        if (response) {
            console.log('Logged in');
        } else {
            console.log('Invalid credentials');
        }
    }
    
    return (
        <View style={styles.container}>
            <GatoLogo width={200} height={100} /> 
            <Button onPress={onPressLogin} title="Log In" style={styles.content} />
        </View>
    )
}

export default LoginScreen;