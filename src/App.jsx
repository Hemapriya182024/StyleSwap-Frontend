import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Audio } from 'react-loader-spinner';

// Import pages
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

// Import components
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Searchbar from './Components/Searchbar';

// Admin Pages
import Add from './Pages/AdminAdd';
import List from './Pages/AdminList';
import Order from './Pages/AdminOrder';
import ErrorBoundary from './ErrorBoundary';

export const backendUrl = 'https://styleswap-backend-1p8e.onrender.com';
export const currency = '$';

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();  
  

  useEffect(() => {
    const loadAssets = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));  
      setLoading(false);  
    };
    loadAssets();
  }, []);

 
  const showLoader = location.pathname !== '/cart';

  return (
    <>
      <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <ToastContainer />
        <NavBar />
        <Searchbar />

        {/* Conditionally show loader */}
        {showLoader && loading && (
          <div className="loader-wrapper flex">
            <Audio height="50" width="50" radius="9" color="black" ariaLabel="loading" />
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/collection" element={<Collection />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<Cart />} /> {/* Cart page */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/place-order" element={<PlaceOrder />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          
         

          {/* Admin routes */}
          <Route path="/admin/*" element={<AdminLayout />}>
            <Route path="add" element={<Add />} />
            <Route path="list" element={<List />} />
            <Route path="orders" element={<Order />} />
          </Route> 
        </Routes> 
      </div>
      <Footer />
      </>
  );
};

export default App;