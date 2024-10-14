import React from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import FeaturedProducts from './Component/FeaturedProducts';  
import Popular from './Component/Popular';
import TrendingProducts from './Component/TrendingProducts';
import SilonJournal from './Component/SilonJournal';
import FollowUs from './Component/FollowUs';

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
    </div>
  );
}

export default App;
