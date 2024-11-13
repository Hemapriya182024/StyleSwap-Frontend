import React from 'react';
import { Routes,Route } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Import pages
import Home from './Pages/Home';
import Collection from './Pages/Collection';
import About from './Pages/About';
import Login from './Pages/Login';
import Cart from './Pages/Cart'
import Orders from './Pages/Orders';
import Product from './Pages/Product';
import Contact from './Pages/Contact';
import PlaceOrder from './Pages/PlaceOrder';


// Import components
import Footer from './Components/Footer';
import NavBar from './Components/NavBar';
import Searchbar from './Components/Searchbar';

 
const App = () => {
  return (
    <>
   
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
     <NavBar />
     <Searchbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path= '/collection' element={<Collection />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/cart' element={<Cart />}/>
        <Route path='/orders' element={<Orders />}/>
        <Route path='/place-order' element={<PlaceOrder />}/>
        <Route path='/product/:productId' element={<Product />}/>
        <Route path='/contact' element={<Contact />} />

      </Routes>
     
      
    </div>
    <div>
    <Footer />
      </div>
      </>
  )
}

export default App
