import React from 'react'
import { View, Image } from 'react-native';
import Constants from 'expo-constants';
import GatoLogo from '../assets/gato-logo.svg';
import Ionicons from '@expo/vector-icons/Ionicons';

const Header = ({isLoggedIn, handleLogout}) => {
    return (
        <View style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: 'black',
            paddingTop: Constants.statusBarHeight,
            paddingVertical: 6,
            paddingHorizontal: 12,
        }}>
            <GatoLogo width={90} height={45} />
            {isLoggedIn && <Ionicons onPress={handleLogout} name="log-out-outline" size={30} color='white' />}
        </View>
    );
}

export default Header;