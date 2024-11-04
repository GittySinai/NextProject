import React from 'react';

interface CardProps {
  user: UserModel; 
}

function Card({ user }: CardProps) {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 m-4 w-80 transition-transform transform hover:scale-105">
      <h2 className="text-center text-lg font-bold text-blue-600">{user.id}</h2>
      <h3 className="text-xl font-semibold text-center mt-2">{user.firstName} {user.lastName}</h3>
      <p className="text-gray-700 text-center mt-1">{user.email}</p>
      <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 mx-auto block mt-2">
        Click
      </button>
    </div>
  );
}

export default Card;
