import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddUser from './conponents/AddUser/AddUser';
import Home from './conponents/Home/Home';
import Navbar from './conponents/shared/Navbar';
import UpdateUser from './conponents/UpdateUser/UpdateUser';

function App() {
  

  return (
    <div className='App'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/addUser' element={<AddUser />} />
        <Route path='/updateUser/:id' element={<UpdateUser />} />
      </Routes>
    </div>
  );
}

export default App;
