import React, { useState } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import { toast } from 'react-toastify';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      // Send login request
      const response = await axios.post(`${backendUrl}/api/user/admin`, { email, password });
      console.log("login responce",response);

      if (response.data.success) {
        setToken(response.data.token); // Store token in parent state
        toast.success("Login successful!");
      } else {
        toast.error(response.data.message || "Login failed!");
      }
    } catch (error) {
      console.error("Error during login:", error);
      toast.error("An error occurred during login. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="rounded-md w-full px-3 py-2 border-gray-300 outline-none"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="rounded-md w-full px-3 py-2 border-gray-300 outline-none"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <button type="submit" className="mt-2 w-full px-2 py-2 rounded-md text-white bg-black">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
