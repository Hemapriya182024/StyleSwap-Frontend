// import React, { useState, useEffect } from 'react';
// import { Routes, Route } from 'react-router-dom';
// import Add from '../Pages/AdminAdd.jsx';
// import List from '../Pages/AdminList';
// import Orders from '../Pages/AdminOrder';
// import Navbar from '../Components/AdminNavbar';
// import SideBar from '../Components/AdminSideBar';
// import AdminLogin from '../Components/AdminLogin.jsx';

// const AdminLayout = ({ setToken }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   // Check if the token is available on mount
//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       setIsAuthenticated(true);
//     }
//   }, []);

//   // Handle login success
//   const handleLogin = (token) => {
//     setToken(token);
//     localStorage.setItem('token', token);
//     setIsAuthenticated(true);
//   };

//   if (!isAuthenticated) {
//     return <AdminLogin onLogin={handleLogin} />;
//   }

//   return (
//     <div className="bg-gray-50 min-h-screen">
//       <Navbar setToken={setToken} />
//       <hr />
//       <div className="flex w-full">
//         <SideBar />
//         <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-800 text-base">
//           <Routes>
//             <Route path="/add" element={<Add />} />
//             <Route path="/list" element={<List />} />
//             <Route path="/orders" element={<Orders />} />
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLayout;
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Add from '../Pages/AdminAdd';
import List from '../Pages/AdminList';
import Orders from '../Pages/AdminOrder';
import Navbar from '../Components/AdminNavbar';
import SideBar from '../Components/AdminSideBar';
import AdminLogin from '../Components/AdminLogin';

const getToken = () => localStorage.getItem('token');
const setTokenToStorage = (token) => localStorage.setItem('token', token);

const AdminLayout = ({ setToken }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

  useEffect(() => {
    if (getToken()) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (token) => {
    setToken(token);
    setTokenToStorage(token);
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar setToken={setToken} />
      <hr />
      <div className="flex w-full">
        <SideBar />
        <div className="w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-800 text-base">
          <Routes>
            <Route path="/admin/add" element={<Add />} />
            <Route path="/admin/list" element={<List />} />
            <Route path="/admin/orders" element={<Orders />} />
            {/* Redirect admin root to /admin/add as a default */}
            <Route path="/admin" element={<Navigate to="/admin/add" />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;

