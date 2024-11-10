import Link from 'next/link';
import React from 'react';

interface CardProps {
  user: UserModel; 
}

function Card({ user }: CardProps) {
  return (

    <Link href={`/pages/cardList/${user.id}`} className="bg-white shadow-lg rounded-lg p-6 m-4 w-80 transition-transform transform hover:scale-105">
      <h2 className="text-center text-lg font-bold text-blue-600">{user.id}</h2>
      <h3 className="text-xl font-semibold text-center mt-2">{user.firstName} {user.lastName}</h3>
      <p className="text-gray-700 text-center mt-1">{user.email}</p>
    </Link>
  );
}

export default Card;
