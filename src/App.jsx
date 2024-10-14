import React from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import TrendingProducts from './Component/TrendingProducts';
import SilonJournal from './Component/SilonJournal';
import FollowUs from './Component/FollowUs';

function App() {
  return (
    <div>
       <Navbar />  
       <Hero />
      <TrendingProducts />
      <SilonJournal />
      <FollowUs />
    </div>
  );
}

export default App;
