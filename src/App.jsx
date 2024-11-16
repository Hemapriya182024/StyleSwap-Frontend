import React, { useState, useEffect, useContext } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Audio } from 'react-loader-spinner';
import { ShopContext } from './Context/ShopContext';

import 'react-toastify/dist/ReactToastify.css';

// Import pages and components
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Login from './Pages/Login';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import PlaceOrder from './Pages/PlaceOrder';
import AdminLayout from './admin/AdminLayout';

import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Searchbar from './Components/Searchbar';

export const backendUrl = 'https://styleswap-backend-1p8e.onrender.com';
export const currency = '$';

const App = () => {
  const { loadingProducts } = useContext(ShopContext); 
  const location = useLocation();

  // Conditionally show loader
  const showLoader = location.pathname !== '/cart' && loadingProducts;

  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
        <ToastContainer />
        <NavBar />
        <Searchbar />

        {/* Conditionally show loader */}
        {showLoader && (
          <div className="loader-wrapper flex">
            <Audio height="50" width="50" radius="9" color="black" ariaLabel="loading" />
          </div>
        )}

        {/* Main Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/contact" element={<Contact />} />

          {/* Admin routes */}
          <Route path="/admin/*" element={<AdminLayout />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
