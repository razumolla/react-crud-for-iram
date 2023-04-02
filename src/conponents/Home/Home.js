import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:5000/user')
      .then(res=>res.json())
      .then(data=> setUsers(data));
    },[])

    const handleUserDelete = (id) => { 
        const confirmation=window.confirm("Are you sure you want to delete this user?");
        if(confirmation){
            fetch(`http://localhost:5000/user/${id}`,{
                method:'DELETE'
            })
         .then(res=>res.json())
         .then(data=>{
            if(data.deletedCount>0){
               const remaining=users.filter(user=>user._id !== id);
               setUsers(remaining);
            }
         });
        }
    }
  
    return (
        <div>
            <h1> This is Home </h1>
            <ul>
                {
                    users.map( (user)=> <li key={user.id}>
                        Id:{user.id}  Name: {user.name}   Email: {user.email} 
                        <Link to={`/updateUser/${user._id}`}> <button> Update</button> </Link>
                        <button onClick={()=> handleUserDelete(user._id)} > X</button>
                    </li>)
                }
            </ul>
        </div>
    );
};

export default Home;