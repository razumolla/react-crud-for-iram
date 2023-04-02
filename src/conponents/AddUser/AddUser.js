import React from 'react';

const AddUser = () => {

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
      console.log('user data', data);
      alert('Data received')
      event.target.reset();
    })
  }
  return (
    <div>
      <h1>Add new user</h1>
        <div>
            <form onSubmit={handleAddUser}>
            <input type="text" name="name" placeholder='Your Name'  required />
            <input type="email" name="email" placeholder='Your Email'  required />
            <input type="submit" value="Add User"  />
            </form>
        </div>
    </div>
    );
};

export default AddUser;