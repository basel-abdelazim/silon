import React from 'react';
import Navbar from './Component/Navbar';
import Hero from './Component/Hero';
import TrendingProducts from './Component/TrendingProducts';
import SilonJournal from './Component/SilonJournal';

function App() {
  return (
    <div>
       <Navbar />  
       <Hero />
      <TrendingProducts />
      <SilonJournal />
    </div>
  );
}

export default App;
