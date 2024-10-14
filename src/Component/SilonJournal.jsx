import React from 'react';

const articles = [
  {
    id: 1,
    date: "07 July, 2019",
    title: "Were divided land his creature which have evening subdue",
    img: "/assets/9.webp",
    category: "Women Fashion",
    comments: 2,
  },
  {
    id: 2,
    date: "07 July, 2019",
    title: "Were divided land his creature which have evening subdue",
    img: "/assets/10.webp",
    category: "Women Fashion",
    comments: 2,
  },
  {
    id: 3,
    date: "07 July, 2019",
    title: "Were divided land his creature which have evening subdue",
    img: "/assets/11.webp",
    category: "Women Fashion",
    comments: 2,
  },
];

const SilonJournal = () => {
  return (
    <section className="py-16">
      <h2 className="text-center text-3xl font-bold mb-8">SILON JOURNAL</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article) => (
          <div key={article.id} className="border p-4">
            <img src={article.img} alt={article.title} className="w-full mb-4" />
            <p className="text-gray-500 mb-2">{article.date}</p>
            <h3 className="text-lg font-bold mb-2">{article.title}</h3>
            <div className="text-gray-500 flex items-center justify-between">
              <span>{article.category}</span>
              <span>{article.comments} Comments</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SilonJournal;
