import React from 'react';
import { Text, ScrollView } from 'react-native';
import { getUsers } from '../../../queries';
import { useQuery } from '@tanstack/react-query';
import UserCard from './UserCard';

const UserList = () => {
    const { data, isLoading } = useQuery({ queryKey: ['users'], queryFn: getUsers });
    
    return (
        <ScrollView contentContainerStyle={{ paddingHorizontal: 5, gap: 10 }}>
            {
                isLoading 
                ? (<Text>Loading...</Text>)
                : (data.map((user) => (
                    <UserCard key={user.id} user={user} />
                )))
            }
        </ScrollView>
    );
};

export default UserList;