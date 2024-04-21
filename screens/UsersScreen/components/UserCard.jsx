import React from 'react'
import { View, Text, Image, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const styles = {
    container: { 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        borderWidth: 1,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'white',
        dropShadow: {
            shadowColor: 'black',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
        },
    },
    avatar: {
        width: 50,
        height: 50,
        backgroundColor: 'lightgray',
        borderRadius: 50,
    },
    content: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
}

const UserCard = ({ user }) => {
    const navigation = useNavigation();

    return (
        <TouchableHighlight onPress={() => navigation.navigate('UserProfile', { user })} underlayColor="white">
            <View style={styles.container}>
                <Image 
                    source={require('../../../assets/user.png')}
                    style={styles.avatar}
                    resizeMode='contain'
                />
            
                <Text style={styles.content}>{user.name}</Text>
            </View>
        </TouchableHighlight>
)};

export default UserCard;