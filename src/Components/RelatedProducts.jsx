import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';
import Title from './Title'; // Assuming you have a Title component
import ProductItems from './ProductItems';

const RelatedProducts = ({ category, subCategory }) => {
    const { products } = useContext(ShopContext); // Get products from context
    const [related, setImageRelated] = useState([]); // State to store related products

    useEffect(() => {
        if (products.length > 0) {
            let productsCopy = products.slice(); // Create a copy of products

            // Filter by category
            productsCopy = productsCopy.filter((item) => category === item.category);

            // Further filter by subcategory
            productsCopy = productsCopy.filter((item) => subCategory === item.subCategory);

            setImageRelated(productsCopy.slice(0, 5)); // Store the first 5 related products
        }
    }, [products, category, subCategory]); // Update effect when products, category, or subCategory changes

    return (
        <>
            <div className='my-24'>
                <div className='text-center text-3xl py-2'>
                    <Title text1={'RELATED'}  text2={'PRODUCTS'} /> {/* Display title */}
                </div>

                {/* Display related products */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-4'>
                    {related.map((product,index) => (
                        // <ProductItems key={index} id={item._id} name={item.name} price={item.price} />
                        <ProductItems 
                        key={index} 
                        id={product._id} 
                        image={product.image} 
                        name={product.name} 
                        price={product.price} 
                    />
                    ))}
                </div>
            </div>
        </>
    );
}

export default RelatedProducts;
