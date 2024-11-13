import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ShopContext } from '../Context/ShopContext';

const ProductItems = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <div >
            <Link className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
                {/* Make the entire product item clickable */}
                <div className='overflow-hidden'>
                    <img className=' flex hover:scale-110 transition ease-in-out' src={image[0]} alt={name} />
                </div>
                <p className='pt-4 pb-4 text-sm'>{name}</p>
                <p className='text-sm font-medium'>{currency}{price}</p>
            </Link>
        </div>
    );
};

export default ProductItems;
