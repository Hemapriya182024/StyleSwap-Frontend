import React, { useState } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useContext } from 'react';
import { assets } from '../assets/assets';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Searchbar = () => {
    const { search,
        setSearch,
        showSearch,
        setShowSearch } = useContext(ShopContext);
       const location=useLocation();
       const [visible,SetVisible]=useState(false)

       useEffect(()=>{
        if(location.pathname.includes('collection')&& showSearch) 
        {
              SetVisible(true)
        }
        else{
            SetVisible(false )
        }

       },[location])

    return showSearch && visible ? (
        <div className='border-t border-b bg-gray-50 text-center '>
         
            <div className='inline-flex items-center justify-center border border-gray-400 px-3 py-3 my-3 mx-3 rounded-full w-3/4 sm:1/4'>
                <input value={search} onChange={(e)=>{ setSearch(e.target.value)}} className='flex-1 outline-none bg-inherit text-sm' type='text' placeholder='Search for products'></input>
                <img className='w-4' src={assets.search_icon}/>
            </div>
            <img  onClick={()=>setShowSearch(false)} className='inline w-3 cursor-pointer 'src={assets.cross_icon} />
        </div>
    ) : null
}

export default Searchbar
