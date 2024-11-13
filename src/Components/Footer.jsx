import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <div>  
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-4 my-10 mt-40 text-sm"> {/* Corrected 'tex-sm' to 'text-sm' */}
        <div>
          <img src={assets.logo} alt="logo" className="mb-5 w-20" />
          <span className="text-2xl font-semibold text-black ruge-boogie-regular">StyleSwap</span>
          <p className="w-full md:w-2/3 text-gray-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt at
            architecto doloribus cum quis sed nihil molestias tempora totam{" "}
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+121 677 78 900</li>
            <li>web@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">©Copyright 2024 All Rights Reserved</p> {/* Corrected 'Right' to 'Rights' */}
      </div>
    </div>
  );
}

export default Footer;
