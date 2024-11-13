import React, { useState, useContext } from 'react';
import { assets } from '../assets/assets';
import { NavLink, Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const NavBar = () => {
  const [visible, SetVisible] = useState(false);
  const { setShowSearch, GetCartCount, token, setToken, navigate, setCartItem } = useContext(ShopContext);

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItem({});
  };

  return (
    <div className='flex items-center justify-between py-5 font-medium'>
      <Link to='/'>
        <div className="flex items-center space-x-1 hover:scale-105 transition-transform duration-300">
          <img src={assets.logo} alt="SheCart Logo" className="w-10 h-auto" />
          <span className="text-2xl font-semibold text-black ruge-boogie-regular">StyleSwap</span>
        </div>
      </Link>

      <ul className='hidden sm:flex gap-5 text-sm text-gray-500'>
        <NavLink to='/' className='flex flex-col items-center gap-1'>Home</NavLink>
        <NavLink to='/collection' className='flex flex-col items-center gap-1'>Collections</NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>About</NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>Contact</NavLink>
      </ul>

      <div className='flex items-center gap-6'>
        <img src={assets.search_icon} onClick={() => setShowSearch(true)} className='w-5 cursor-pointer' alt="search" />
        <div className='group relative'>
          <img onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="profile" />
          {token && (
            <div className='group-hover:block hidden absolute dropdownm-menu right-0 pt-4'>
              <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                <p className='cursor-pointer hover:text-black'>My Profile</p>
                <p onClick={()=>navigate('/orders')}className='cursor-pointer hover:text-black'>Orders</p>
                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
              </div>
            </div>
          )}
        </div>

        <Link to='/cart' className='relative'>
          <img src={assets.cart_icon} alt="cart_icon" className='w-5 min-w-5' />
          <p className='bg-black text-white rounded-full absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 aspect-square text-[8px]'>{GetCartCount()}</p>
        </Link>
        <img onClick={() => SetVisible(true)} src={assets.menu_icon} className='cursor-pointer w-5 min-w-5 sm:hidden' alt="menu" />
      </div>

      <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
        <div className='flex flex-col text-gray-600'>
          <div onClick={() => SetVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer'>
            <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="dropdown" />
            <p>Back</p>
          </div>
          <NavLink onClick={() => SetVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
          <NavLink onClick={() => SetVisible(false)} className='py-2 pl-6 border' to='/collection'>Collections</NavLink>
          <NavLink onClick={() => SetVisible(false)} className='py-2 pl-6 border' to='/about'>About</NavLink>
          <NavLink onClick={() => SetVisible(false)} className='py-2 pl-6 border' to='/contact'>Contact</NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
