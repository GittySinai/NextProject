'use client'
import React, { useEffect, useState } from 'react';
import Card from './Card';
import userStore from '../stores/userStore';
import AddUser from './AddUser';

function CardList() {
    const [localUsers, setLocalUsers] = useState<UserModel[]>([]); 
    const users = userStore((state) => state.users); 
    const fetchUsers = userStore((state) => state.fetchUsers); 

   
    useEffect(() => {
        setLocalUsers(users);
    }, [users]);

  
    useEffect(() => {
        if (users.length === 0) { 
            fetchUsers();
        }
    }, [fetchUsers, users.length]); 

    return (
        <div>
            <AddUser />
            <h1 className="text-2xl font-bold mb-4 text-center mt-3">Users List</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
                {localUsers.map((user: UserModel) => (
                    <Card key={user.id} user={user} />
                ))}
            </div>
        </div>
    );
}

export default CardList;
