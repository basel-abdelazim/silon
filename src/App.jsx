
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import FeaturedProducts from './Component/FeaturedProducts';  
import Popular from './Component/Popular';
import TrendingProducts from './Component/TrendingProducts';
import SilonJournal from './Component/SilonJournal';
import FollowUs from './Component/FollowUs';
import Footer from './components/Footer.jsx';


function App() {
  return (
    <div>
       <Navbar />  
       <Hero />
          <FeaturedProducts />
                <Popular /> 
      <TrendingProducts />
      <SilonJournal />
      <FollowUs />
    <Footer />
    </div>
  );
}

export default App;
