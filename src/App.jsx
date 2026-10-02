import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './pages/Home' 
import { Routes } from 'react-router-dom'
import Footer from "./Components/Footer";
import CollectionsHero from "./pages/Curratedcollection";
import Artist from "./pages/Artist";
import Sculptures from "./pages/Sculptures";
import Profile from "./pages/Profile";
import AboutArtNest from "./pages/AboutArtNest";
import imagePlaceholder from "/artwork-placeholder.svg";

const App = () => {
  const [cartCount, setCartCount] = useState(() => {
    const saved = Number(window.localStorage.getItem('artnest-cart-count') || '0');
    return Number.isFinite(saved) ? saved : 0;
  });

  useEffect(() => {
    window.localStorage.setItem('artnest-cart-count', String(cartCount));
  }, [cartCount]);

  const addToCart = () => {
    setCartCount((count) => count + 1);
  };

  return (
    <div onErrorCapture={(event) => {
      const image = event.target;
      if (image instanceof HTMLImageElement && !image.dataset.fallbackApplied) {
        image.dataset.fallbackApplied = "true";
        image.src = imagePlaceholder;
      }
    }}>
      <Navbar cartCount={cartCount} />
      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/collections" element={<CollectionsHero />} />
        <Route path="/artists" element={<Artist />} />
        <Route path="/sculptures" element={<Sculptures onAddToCart={addToCart} />} />
        <Route path="/about" element={<AboutArtNest />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
