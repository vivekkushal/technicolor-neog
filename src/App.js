import './App.css';
import Mockman from 'mockman-js';

import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
import About from './pages/about/About';
import Products from './components/products/Products';
import SingleProduct from './pages/singleProduct/SingleProduct';
import Cart from './components/addToCart/AddToCart';
import Wishlist from './components/addToWishlist/AddToWishlist';
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Error from './pages/error/Error';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:productId" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
