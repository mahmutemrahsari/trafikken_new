import React from "react";

interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users"); //cache is active!
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <h3>{new Date().toLocaleTimeString()}</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UserPage;
