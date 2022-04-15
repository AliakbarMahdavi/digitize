import React from 'react';

// react-router-dom
import { Routes, Route, Navigate } from 'react-router-dom';

// components
import Home from './components/home';
import Login from "./components/login"
import Cart from "./components/cart"
import ContactUs from "./components/contactUs"
import Notfound from "./components/notFound"
import ProductDetails from "./components/productdetails"
import Signup from './components/signup';
import Grouping from './components/grouping';


const App = () => {
  return (
    <div>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contactUs" element={<ContactUs/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/product/:id' element={<ProductDetails/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/grouping' element={<Grouping/>}/>
          <Route path="/notfound" element={<Notfound/>}/>
          <Route path="/*" element={<Navigate to="/notfound"/>}/>
      </Routes>
    </div>
  );
};

export default App;
