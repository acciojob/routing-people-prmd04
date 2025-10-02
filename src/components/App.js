
import React,{useState,useEffect} from "react";
import './../styles/App.css';
import "regenerator-runtime/runtime";
import { UserList } from "./UserList";
import {Routes,Route} from 'react-router-dom';
import UserDetails from './UserDetails'



const App = () => {
  const [users,setUsers] = useState([]);

  useEffect(()=>{
    async function fetchUser(){
      try{
        const response = await fetch("https://dummyjson.com/users");

        if(!response.ok){
          throw new error ("unable to fetch the user details")
        }

        const data = await response.json();
        console.log(data);

        setUsers(data.users)
      }
      catch(err){
        alert(err);
      }
    }
    fetchUser();
  },[])


  return (
    <>
    <Routes>
      <Route path='/' element={<UserList  users={users} />}></Route>
      <Route path ='/users/:id' element={<UserDetails users={users} setUsers={setUsers}/>}></Route>
      
    </Routes>
    </>
    
  )
}

export default App
