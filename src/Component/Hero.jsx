import React from 'react';

export default function Hero() {
  return (
    <section 
      className="relative w-full h-128 bg-cover bg-center" 
      style={{ backgroundImage: `url('/bg-1.webp')` }}
    >
      <div className="container mx-auto h-full flex flex-col md:flex-row items-center justify-between">
        
        {/* Woman pic side */}
        <div className="relative z-10 md:w-1/2 w-full flex items-stretch order-1 md:order-2">
          <img 
            src="/ban-1.webp" 
            alt="Fashion Woman" 
            className="h-full w-full object-cover"
          />
        </div>

  {/* Text side */}
<div className="flex flex-col justify-center items-center h-full md:w-1/2 w-full px-6 md:px-12 z-10 order-2 md:order-1"> 
  <span className="block text-gray-600 uppercase text-sm tracking-wider mb-2 text-center"> 
    Ultimate Collection
  </span>
  <h1 className="text-4xl lg:text-6xl md:text-3xl font-medium text-black mb-6 leading-tight lg:leading-16 text-center"> 
    Complete Women Fashion Here
  </h1>
  <button className="bg-red-500 uppercase text-white px-10 py-4 text-sm font-medium rounded-sm hover:bg-red-600 transition">
    Shop Now
  </button>
</div>
      </div>
    </section>
  );
}