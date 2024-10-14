import React from 'react';

const products = [
  { id: 1, name: "Red Women Purses", price: "$35", img: "/assets/1.webp" },
  { id: 2, name: "Red Women Purses", price: "$35", img: "/assets/2.webp" },
  { id: 3, name: "Red Women Purses", price: "$35", img: "/assets/3.webp" },
  { id: 4, name: "Red Women Purses", price: "$35", img: "/assets/4.webp" },
  { id: 5, name: "Red Women Purses", price: "$35", img: "/assets/5.webp" },
  { id: 6, name: "Red Women Purses", price: "$35", img: "/assets/6.webp" },
  { id: 7, name: "Red Women Purses", price: "$35", img: "/assets/7.webp" },
  { id: 8, name: "Red Women Purses", price: "$35", img: "/assets/8.webp" },
];

const TrendingProducts = () => {
    return (
      <section className="py-16">
        <h2 className="text-center text-3xl font-bold mb-8">TRENDING PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group relative text-center bg-white p-4 shadow-lg rounded-lg">
              <figure className="product-thumb relative">
                <img src={product.img} alt={product.name} className="w-full mb-4" />
                
                {/* Action Links */}
                <div className="action-links absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* Quick View */}
                  <a href="#" className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
                    <img src="/assets/vision.png" alt="Quick View" className="w-6 h-6"/>
                  </a>
                  {/* Wishlist */}
                  <a href="#" className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
                    <img src="/assets/heart.png" alt="Wishlist" className="w-6 h-6"/>
                  </a>
                  {/* Add to Cart */}
                  <a href="#" className="bg-white p-2 rounded-full shadow-md hover:bg-gray-200 transition duration-300">
                    <img src="/assets/shopping-cart.png" alt="Add to Cart" className="w-6 h-6"/>
                  </a>
                </div>
              </figure>
              <div className="product-content">
                <h3 className="text-sm font-medium">{product.name}</h3>
                <p className="text-red-500">★★★★★</p>
                <p className="text-lg font-bold">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default TrendingProducts;
