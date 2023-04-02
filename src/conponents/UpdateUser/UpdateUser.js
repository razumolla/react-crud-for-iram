import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id}=useParams();
   
    const [singleUser,setSingleUser]=useState([]);
    useEffect(()=>{
      fetch(`http://localhost:5000/user/${id}`)
      .then(res=>res.json())
      .then(data=> setSingleUser(data));
    },[])

    console.log(singleUser);
    

    const handleUpdateUser=(event)=>{
        event.preventDefault(); //Why preventDefault: when I submit from then this page will get auto reload
        const name=event.target.name.value; //for get name Input value
        const email=event.target.email.value; //for get email Input value
        const user ={name,email};
        // post data to server
        fetch(`http://localhost:5000/user/${id}`, {
          method: 'PUT',
          headers: {
            'content-type': 'application/json',
          },
          body: JSON.stringify(user),
        })
        .then((res) => res.json())
        .then((data) => {
          console.log('user data', data);
          event.target.reset();
        })
    }
    return (
        <div>
            <h2>Update User: {id} : {singleUser.name} </h2>
            <form onSubmit={handleUpdateUser}>
            <input type="text" name="name" placeholder='Your Name'  required />
            <input type="email" name="email" placeholder='Your Email'  required />
            <input type="submit" value="Update User"  />
            </form>
        </div>
    );
};

export default UpdateUser;