import React from 'react';

const FollowUs = () => {
  const images = [
    { id: 1, img: "/assets/a.webp", alt: "Follow us image 1" },
    { id: 2, img: "/assets/s.webp", alt: "Follow us image 2" },
    { id: 3, img: "/assets/d.webp", alt: "Follow us image 3" },
    { id: 4, img: "/assets/f.webp", alt: "Follow us image 4" },
  ];

  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold mb-12">FOLLOW US</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((image) => (
          <div key={image.id} className="relative group overflow-hidden rounded-lg shadow-lg">
            <img src={image.img} alt={image.alt} className="w-full h-auto transform group-hover:scale-110 transition-transform duration-500 ease-in-out" />
            {/* Instagram Icon Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 ease-in-out">
              <i className="fab fa-instagram text-white text-5xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out"></i>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FollowUs;
