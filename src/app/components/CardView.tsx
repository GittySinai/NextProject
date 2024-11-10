"use client"
import React, { useEffect, useState } from 'react'
import userStore from '../stores/userStore';
import { useRouter } from 'next/router';

interface CardViewProps {
    userId: number;
}

function CardView({ userId }: CardViewProps) {
    const [user, setUser] = useState<UserModel | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [updatedUser, setUpdatedUser] = useState<UserModel | null>(null); 
    const deleteUser = userStore((state) => state.deleteUser);
    const updateUser = userStore((state) => state.updateUser);
    const users = userStore((state) => state.users);
    const getUserById = userStore.getState().getUserById;
    // const router = useRouter();


   useEffect(() => {
    const selectedUser = getUserById(userId);
    setUser(selectedUser || null);
    console.log("Received userId:", userId);
    console.log("User data:", selectedUser);
  }, [userId, users]);

  const handleDelete = () => {
    if (user) {
        deleteUser(user.id); 
        alert('User deleted');
        // router.push('/pages/cardList'); 

    }
};

const handleUpdate = () => {
    if (updatedUser) {
        updateUser(updatedUser);
        setUser(updatedUser); 
        setIsEditing(false); 
        alert('User updated');
    }
};

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedUser((prevUser) => {
        if (prevUser) {
            return {
                ...prevUser,
                [name]: value
            };
        }
        return prevUser;
    });
};

return (
    <div className="w-1/3 mx-auto my-4 p-4 bg-white rounded-lg shadow-md">
        <img
            src="https://via.placeholder.com/80"
            alt="Avatar"
            className="w-20 h-20 rounded-full mx-auto mb-2"
        />
        <div className="text-center">
            {!isEditing ? (
                <>
                    <h2 className="text-xl font-bold">{user?.firstName} {user?.lastName}</h2>
                    <p className="text-gray-600">Email: {user?.email}</p>
                    <p className="text-gray-600">Phone: (123) 456-7890</p>
                    <div className="mt-4">
                        <button
                            onClick={() => {
                                setIsEditing(true);
                                setUpdatedUser(user);
                            }}
                            className="bg-yellow-500 text-white py-2 px-4 rounded mr-2"
                        >
                            Update
                        </button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-500 text-white py-2 px-4 rounded"
                        >
                            Delete
                        </button>
                    </div>
                </>
            ) : (
                <div>
                    <h2 className="text-xl font-bold">Edit User</h2>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">First Name</label>
                        <input
                            type="text"
                            name="firstName"
                            value={updatedUser?.firstName || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Last Name</label>
                        <input
                            type="text"
                            name="lastName"
                            value={updatedUser?.lastName || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={updatedUser?.email || ''}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md"
                        />
                    </div>
                    <div className="mt-4">
                        <button
                            onClick={handleUpdate} 
                            className="bg-green-500 text-white py-2 px-4 rounded mr-2"
                        >
                            Save
                        </button>
                        <button
                            onClick={() => setIsEditing(false)} 
                            className="bg-gray-500 text-white py-2 px-4 rounded"
                        >
                            Cancel
                        </button>
                    </div>
                </div>
            )}
        </div>
    </div>
);
}

export default CardView;