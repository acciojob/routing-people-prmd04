import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const UserDetails = ({ users, setUsers }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    if (users.length > 0) {
      const found = users.find((p) => p.id === parseInt(id));
      setUser(found);
    }
  }, [id, users]);
  console.log(id);
  if (!user) return <div>Loading...</div>
  return (
    <>
      <div>
        <h1>User Details</h1>
      </div>

      <div>
        <p>
          Name: {user.firstName} {user.lastName}
        </p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Website: {user.domain}</p> // if API provides 'domain' for website
        <button onClick={() => navigate(-1)}>All Users</button>
      </div>
    </>
  );
};

export default UserDetails;
