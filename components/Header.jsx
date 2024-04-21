import React from 'react'
import { View, Image } from 'react-native';
import Constants from 'expo-constants';
import GatoLogo from '../assets/gato-logo.svg';

const Header = () => {
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
            {/* <Image
              // style={{ width: 30, height: 30 }}
              source={require('../assets/gato-logo.svg')}
            /> */}
            <GatoLogo width={90} height={45} />
            <Image
              style={{ width: 30, height: 30 }}
              source={require('../assets/user.png')}
            />

        </View>
    );
}

export default Header;