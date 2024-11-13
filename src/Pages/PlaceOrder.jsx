import React, { useContext, useState } from 'react';
import Title from '../Components/Title';
import CardTotal from '../Components/CartTotal';
import { assets } from '../assets/assets';
import { ShopContext } from '../Context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify'; // Make sure toast is imported

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { backendUrl, token, cartItem, getCardAmount, delivery_fee, products, setCartItem, navigate } = useContext(ShopContext);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    // console.log(`Field: ${name}, Value: ${value}`); // Debug: Log field name and value
    setFormData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let orderItems = [];
      for (const items in cartItem) {
        for (const item in cartItem[items]) {
          if (cartItem[items][item] > 0) {
            const product = products.find((product) => product._id === items);
            if (product) {
              const itemInfo = structuredClone(product); // Structured clone for deep copy
              itemInfo.size = item;
              itemInfo.quantity = cartItem[items][item];
              orderItems.push(itemInfo);
            }
          }
        }
      }
      console.log('orderitems:', orderItems);

      let orderData = {
        address: formData,
        items: orderItems,
        amount: getCardAmount() + delivery_fee,
     
       
      };
      console.log(orderData.amount)
      if (token !== "") {
        const response = await axios.post(
          backendUrl + "/api/order/place",
          orderData,
          { headers: { Authorization: "Bearer " + token } }
        );
        if (response.data.message) {
          console.log(response.data.message);
          toast.success(response.data.message);
          setCartItem({});
          navigate("/orders");
        } else {
          toast.error(response.message);
        }
      } else {
        toast.error("login to place the order");
      }

      // switch (method) {
      //   // API calls for cod orders
      //   case 'cod':
      //     const response = await axios.post(backendUrl + '/api/order/place', orderData, {

      //       headers: { Authorization: `Bearer ${token}` }
      //     });
      //     console.log("Response data:", response.data);
      //     if (response.data.success) {
      //       setCartItem({});
      //       navigate('/orders');
      //     } else {
      //       toast.error(response.data.message); // Show error message using toast
      //     }
      //     break;

      //   default:
      //     break;
      // }
    } catch (error) {
      console.error("Error placing order:", error);
      toast.error("Error placing order. Please try again."); // Show error message
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-top'>
      {/* Left Side */}
      <div className='flex flex-col gap-4 w-full sm:max-w-[480px]'>
        <div className='text-xl sm:text-2xl my-3'>
          <Title text1={'DELIVERY'} text2={'INFORMATION'} />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='firstName' value={formData.firstName} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type='text' placeholder='First Name' />
          <input required onChange={onChangeHandler} name='lastName' value={formData.lastName} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Last Name' />
        </div>
        <input required onChange={onChangeHandler} name='email' value={formData.email} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type='email' placeholder='Email Address' />
        <input required onChange={onChangeHandler} name='street' value={formData.street} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Street' />
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='city' value={formData.city} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type='text' placeholder='City' />
          <input required onChange={onChangeHandler} name='state' value={formData.state} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type='text' placeholder='State' />
        </div>
        <div className='flex gap-3'>
          <input required onChange={onChangeHandler} name='zipcode' value={formData.zipcode} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type='number' placeholder='ZipCode' />
          <input required onChange={onChangeHandler} name='country' value={formData.country} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type='text' placeholder='Country' />
        </div>
        <input required onChange={onChangeHandler} name='phone' value={formData.phone} className='border border-gray-400 rounded py-1.5 px-3.5 w-full' type='number' placeholder='Phone Number' />
      </div>

      {/* Right Side */}
      <div>
        <div className='mt-8 min-w-80'>
          <CardTotal />
        </div>
        <div className="mt-12">
          <Title text1={"PAYMENT"} text2={"METHOD"} />
          {/* ------------- payment Method secetion -------------- */}
          <div className="flex gap-3 flex-col lg:flex-row">
            <div
              onClick={() => setMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full ${
                  method === "stripe" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                src={assets.stripe_logo}
                alt="stripe_logo"
                className="h-5 mx-4"
              />
            </div>
            <div
              onClick={() => setMethod("razorpay")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method === "razorpay" ? "bg-green-400" : ""
                }`}
              ></p>
              <img
                src={assets.razorpay_logo}
                alt="stripe_logo"
                className="h-5 mx-4"
              />
            </div>
            <div
              onClick={() => setMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full  ${
                  method === "cod" ? "bg-green-400" : ""
                }`}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4 ">
                CASH ON DELIVERY
              </p>
            </div>
          </div>
          <div className="w-full text-end mt-8 ">
            <button
              type="submit"
              className="bg-black text-white px-16 py-3 text-sm"
            >
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
     
    </form>
  );
};

export default PlaceOrder;
