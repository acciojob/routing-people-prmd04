import React from "react";
import {Link} from 'react-router-dom'

export const UserList = ({ users }) => {
  console.log(users);
  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id}><Link to={`/users/${user.id}`}>{user.firstName} {user.lastName} </Link></li>
        ))}
      </ul>
    </div>
  );
};
