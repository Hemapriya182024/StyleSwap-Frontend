import React, { useState, useEffect } from 'react';
import { Routes, Route, Link, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Add from '../Pages/AdminAdd';
import List from '../Pages/AdminList';
import Orders from '../Pages/AdminOrder';
import Navbar from '../Components/AdminNavbar';
import SideBar from '../Components/AdminSideBar';
import Login from './Login.jsx'; 


export const backendUrl = 'http://localhost:4000';
export const currency = '$';

const AdminApp = () => {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      console.log("Token not found");
    }
  }, [token]);

  // If the token is not available, redirect to the login page
  if (token === '') {
    return <Login setToken={setToken} />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <ToastContainer />
      <Navbar setToken={setToken} />
      <hr />
      <div className="flex w-full">
        <SideBar />
        <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-800 text-base">
          
           <Routes>
            <Route path="/add" element={<Add token={token} />} />
            <Route path="/list" element={<List token={token} />} />
            <Route path="/orders" element={<Orders token={token} />} />
          </Routes> 
          
        </div>
      </div>
    </div>
  );
};

export default AdminApp;
