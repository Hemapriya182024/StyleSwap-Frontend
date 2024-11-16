import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios';

// Create the ShopContext
export const ShopContext = createContext();

// ShopContextProvider component
const ShopContextProvider = (props) => {
  const currency = '$';
  const delivery_fee = 10;

  const backendUrl =  "https://styleswap-backend-1p8e.onrender.com";
  // console.log("Backend URL:", backendUrl);

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartItem, setCartItem] = useState(() => {
    // Get cart items from localStorage on initial load
    const savedCart = localStorage.getItem('cartItem');
    return savedCart ? JSON.parse(savedCart) : {}; // If saved cart exists, use it, else empty object
  });
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState('');
  const [loadingProducts, setLoadingProducts] = useState(true); 
  const navigate = useNavigate();

  // Function to persist cartItem in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItem', JSON.stringify(cartItem)); // Save cart items to localStorage
  }, [cartItem]);

  const addToCart = async (itemId, size) => {
    let cartData = JSON.parse(JSON.stringify(cartItem));
    console.log(cartData)

    if (!size) {
      toast.error('Please select a product size');
      return;
    }
   
    if (cartItem[itemId]) {
      cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
    } else {
      cartData[itemId] = { [size]: 1 };
    }

    setCartItem(cartData);
    console.log("Selected products in the cart: ", cartData);
    console.log("Bearer Token in request: ", token);
    if (token) {
      try {
        await axios.post(`${backendUrl}/api/cart/add`, { itemId, size }, {
          headers: { Authorization: `Bearer ${token}` }
        });
      } catch (error) {
        console.error("Error adding to cart:", error);
        toast.error("Failed to add to cart: " + error.message);
      }
    }
  };

  const GetCartCount = () => {
    return Object.values(cartItem).reduce((total, itemSizes) => {
      return total + Object.values(itemSizes).reduce((sum, quantity) => sum + quantity, 0);
    }, 0);
  };

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = JSON.parse(JSON.stringify(cartItem));
    if (cartData[itemId] && cartData[itemId][size] !== undefined) {
      cartData[itemId][size] = quantity;
      setCartItem(cartData);
      if (token) {
        try {
          await axios.post(`${backendUrl}/api/cart/update`, { itemId, size, quantity }, {
            headers: { Authorization: `Bearer ${token}` }
          });
        } catch (error) {
          console.error("Error updating quantity:", error);
          toast.error("Failed to update cart quantity");
        }
      }
    } else {
      toast.error("Item or size not found in cart");
    }
  };

  const getCardAmount = () => {
    return Object.entries(cartItem).reduce((total, [itemId, itemSizes]) => {
      const itemInfo = products.find((product) => product._id === itemId);
      if (itemInfo) {
        total += Object.entries(itemSizes).reduce(
          (subtotal, [size, quantity]) => subtotal + (itemInfo.price * quantity),
          0
        );
      } else {
        console.error(`Product not found for item ID: ${itemId}`);
      }
      return total;
    }, 0);
  };

  // const getProductsData = async () => {
  //   if (!backendUrl) {
  //     toast.error("Backend URL is not set.");
  //     return;
  //   }

  //   // Avoid unnecessary API calls
  //   if (products.length > 0) return;

  //   try {
  //     const response = await axios.get(`${backendUrl}/api/product/list`);
  //     setProducts(response.data.products || []);
  //   } catch (error) {
  //     console.error("Error fetching data:", error.response || error);
  //     toast.error("Error fetching products");
  //   }
  // };

  const getProductsData = async () => {
    if (!backendUrl) {
      toast.error("Backend URL is not set.");
      return;
    }
  
    if (products.length > 0) {
      setLoadingProducts(false); 
      return;
    }
  
    try {
      setLoadingProducts(true); 
      const response = await axios.get(`${backendUrl}/api/product/list`);
      setProducts(response.data.products || []);
    } catch (error) {
      console.error("Error fetching data:", error.response || error);
      toast.error("Error fetching products");
    } finally {
      setLoadingProducts(false); 
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(backendUrl + `/api/cart/get`, {}, {
        headers: { Authorization: `Bearer ${token}` } 
      });
      if (response.data.success) {
        setCartItem(response.data.cartData);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
      toast.error(error.response ? error.response.data.message : error.message);
    }
  };
  
  useEffect(() => {
    getProductsData();
  }, []);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      getUserCart(storedToken);
    }
  }, []);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    setCartItem,
    cartItem,
    addToCart,
    GetCartCount,
    updateQuantity,
    getCardAmount,
    navigate,
    backendUrl,
    setToken,
    token,
    loadingProducts
  };

  return (
    <ShopContext.Provider value={value}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
