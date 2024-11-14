import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>  
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-4 my-10 mt-40 text-sm pl-4">
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-20" />
          <span className="text-2xl font-semibold text-black ruge-boogie-regular">StyleSwap</span>
          <p className="w-full md:w-2/3 text-gray-600">
            Discover your style with ease at <strong>StyleSwap</strong>, where fashion meets convenience. Explore our curated selection of high-quality, stylish clothing and accessories tailored to enhance your personal look.
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Phone: +121 677 78 900</li>
            <li>Email: support@styleswap.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          © 2024 StyleSwap. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
