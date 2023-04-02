import React, { useEffect, useState } from 'react';

const First = () => {
    const [users,setUsers]=useState([]);
    useEffect(()=>{
      fetch('http://localhost:5000/users')
      .then(res=>res.json())
      .then(data=> setUsers(data));
    },[])
  
    const handleAddUser=(event)=>{
      event.preventDefault(); //Why preventDefault: when I submit from then this page will get auto reload
      const name=event.target.name.value; //for get name Input value
      const email=event.target.email.value; //for get email Input value
      const user ={name,email};
  
      // post data to server
      fetch('http://localhost:5000/user', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(user),
      })
      .then((res) => res.json())
      .then((data) => {
        // console.log('Success:', data);
        const newUsers=[...users, data];
        setUsers(newUsers);
      })
      
    }
  
    return (
        <div>
            <h1> Hello from My own data:{users.length} </h1>
            
            <div>
                <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder='Your Name'  required />
                <input type="email" name="email" placeholder='Your Email'  required />
                <input type="submit" value="Add User"  />
                </form>
            </div>
            
            <ul>
                {
                    users.map( (user)=> <li key={user.id}>Id:{user.id}  Name: {user.name}   Email: {user.email} </li>)
                }
            </ul>
            
        </div>
    );
};

export default First;