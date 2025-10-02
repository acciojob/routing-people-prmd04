import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const UserDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // ✅ for "Loading..." state

  useEffect(() => {
    async function fetchUser() {
      setLoading(true); // show loading initially
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) throw new Error('Unable to fetch user');
        const data = await response.json();
        setUser(data);
      } catch (err) {
        alert(err);
      } finally {
        setLoading(false);
      }
    }
    fetchUser();
  }, [id]);

  if (loading) return <div>Loading...</div>; // ✅ must be inside div

  if (!user) return <div>User not found</div>;

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
      <button onClick={() => navigate(-1)}>All Users</button>
    </div>
  );
};

export default UserDetails;
