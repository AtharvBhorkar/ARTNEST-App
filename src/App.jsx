import React from 'react'
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
  return (
    <div onErrorCapture={(event) => {
      const image = event.target;
      if (image instanceof HTMLImageElement && !image.dataset.fallbackApplied) {
        image.dataset.fallbackApplied = "true";
        image.src = imagePlaceholder;
      }
    }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/collections" element={<CollectionsHero />} />
        <Route path="/artists" element={<Artist />} />
        <Route path="/sculptures" element={<Sculptures />} />
        <Route path="/about" element={<AboutArtNest />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
