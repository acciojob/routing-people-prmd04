import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const UserDetails = ({users,setUsers}) => {
  const {id} = useParams();
  const[user,setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(()=>{
    if(users.length>0){
      const found = users.find(p=>p.id===parseInt(id));
      setUser(found);
    }
  },[id,users])
  console.log(id);
  if(!user) return <div>...loding</div>
  return (
   <div>
    <p><b>Name </b>: {user.firstName} {user.lastName}</p>
    <p><b>Username </b>: {user.username}</p>
    <p><b>Email </b>: {user.email}</p>
    <p><b>Phone: </b>{user.phone}</p>
    <button onClick={() => navigate(-1)}>All Users</button>

    
   </div>
  )
}

export default UserDetails