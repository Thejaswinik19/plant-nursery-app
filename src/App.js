import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

import ExclusiveOffers from './components/ExclusiveOffers';
import Products from './pages/Products'; // New route
import ProductDetails from './pages/ProductDetails'; // New route
import ShopPot from './pages/ShopPot';
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/exclusive-offers" element={<ExclusiveOffers />} />
        <Route path="/shoppot/:offerId" element={<ShopPot />} />
        <Route path="/products/:categoryId" element={<Products />} /> {/* New route for categories */}
        <Route path="/product/:productId" element={<ProductDetails />} /> {/* New route for individual products */}
      </Routes>
    </Router>
  );
};

export default App;
