import React from 'react'

interface User {
  id: number;
  name: string;
}

const usersPage = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users: User [] = await res.json();
  return (
    <>
      <h1 className='text-6xl p-6 my-4 text-gray-200 hover:text-gray-100 font-extrabold'>Users</h1>
      <ul>
        {users.map(user => <li key={user.id}>{user.name}</li>)}
      </ul>
    </>
  )
}

export default usersPage
