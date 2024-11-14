import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";
import  {backendUrl,currency }  from "../App";
import { toast } from "react-toastify";

const List = ({ token }) => {
  const [list, setList] = useState([]);

  // Fetch the list of products
  const fetchList = useCallback(async () => {
      console.log("Token:", token);
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.products) {
        setList(response.data.products);
      } else {
        toast.error(response.data.message || "Failed to fetch product list");
      }
    } catch (err) {
      toast.error(err.response?.data?.message || "An error occurred while fetching products");
      console.error("Fetch Error:", err.response?.data?.message || err.message);
    }
  }, [token]);

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  // Remove a product from the list
  const removeProduct = async (id) => {
    try{
      const responce=await axios.post(backendUrl+'/api/product/remove' ,{id},{headers:{token}})

      if(responce.data.success)
      {
        toast.success(responce.data.message)
        await fetchList()
      }
      else{

        toast.error(responce.data.message)
      }

    }
    catch(error)
    {
      console.log(error)
      toast.error(error.message)
    }
  };

  return (
    <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
      <p className="mb-2 font-semibold">All Products List</p>
      <div className="flex flex-col gap-2">
        {/* Header Row */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Product Rows */}
        {list.length > 0 ? (
          list.map((item) => (
            <div
              key={item._id}
              className="grid grid-cols-[1fr_1fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            >
              <img
                className="w-12 h-12 object-cover"
                src={Array.isArray(item.image) && item.image[0] ? item.image[0] : ""}
                alt={item.name || "Product image"}
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{currency} {item.price}</p>
              <p
                className="text-right md:text-center cursor-pointer text-xl text-red-500"
                onClick={() => removeProduct(item._id)}
              >
                &times;
              </p>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No products available.</p>
        )}
      </div>
    </div>
  );
};

export default List;
