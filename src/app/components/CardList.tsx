import React from 'react';
import Card from './Card';
import { getUsers } from '../services/users';

async function CardList() {
  const data = await getUsers();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center mt-3">Users List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {data.users.map((user: UserModel) => (
          <Card key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default CardList;
