import React from "react";
import {Link} from 'react-router-dom'

export const UserList = ({ users }) => {
  console.log(users);
  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}><Link to={`/users/${user.id}`}>{user.name} </Link></li>
        ))}
      </ul>
    </div>
  );
};
