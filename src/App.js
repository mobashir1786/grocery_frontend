import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './componet/Navbar';
import Home from './page/Home';
import Fruits from './page/Fruits';
import Vegetables from './page/Vegetables';
import Sweets from './page/Sweets';
import Dryfruit from './page/Dryfruit';
import Dairy from './page/Dairy';
import SubNavbar from './componet/SubNavbar';
import LoginSignup from './componet/LoginSignup';
import Cart from './componet/Cart';
import Address from './componet/address';
import Logout from './componet/Logout';
import Search from './componet/Search';

function App() {
  const [state, setState] = React.useState([]);
  console.log(state);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar setState={setState} state={state}/>
        <SubNavbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fruits' element={<Fruits />} />
          <Route path='/vegetables' element={<Vegetables />} />
          <Route path='/sweets' element={<Sweets />} />
          <Route path='/dryfruites' element={<Dryfruit />} />
          <Route path='/Dairy' element={<Dairy />} />
          <Route path='/loginsignup' element={<LoginSignup />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/address' element={<Address />} />
          <Route path='/Logout' element={<Logout />} />
          <Route path='/search' element={<Search state={state}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
