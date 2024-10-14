import React, { useState } from "react";

const Popular = () => {
  
  const [ratings, setRatings] = useState([0, 0, 0, 0]); 

  
  const handleRatingClick = (index, value) => {
    const newRatings = [...ratings];
    newRatings[index] = value; 
    setRatings(newRatings);
  };

  
  const renderStars = (index) => {
    return (
      <div className="flex justify-center mb-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => handleRatingClick(index, star)}
            className={`cursor-pointer text-yellow-500 ${
              star <= ratings[index] ? "filled-star" : "empty-star"
            }`}
          >
            {star <= ratings[index] ? "⭐" : "☆"}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div>
      <section className="popular-products py-10">
        <header className="sec-heading mb-8 text-center">
          <h3 className="sec-title">MOST POPULAR</h3>
        </header>
        <div className="flex flex-wrap justify-center">
          {/* Image Item 1 */}
          <div className="w-full sm:w-1/4 p-2">
            <img
              src="/red-women1.webp"
              alt="Red Women Purse 1"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="text-center mt-2">
              <h4 className="text-lg font-semibold">Red Women Purse</h4>
              {renderStars(0)}
              <p className="text-lg font-bold">$35</p>
            </div>
          </div>

          {/* Image Item 2 */}
          <div className="w-full sm:w-1/4 p-2">
            <img
              src="/red-women2.webp"
              alt="Red Women Purse 2"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="text-center mt-2">
              <h4 className="text-lg font-semibold">Red Women Purse</h4>
              {renderStars(1)}
              <p className="text-lg font-bold">$35</p>
            </div>
          </div>

          {/* Image Item 3 */}
          <div className="w-full sm:w-1/4 p-2">
            <img
              src="/red-women3.webp"
              alt="Red Women Purse 3"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="text-center mt-2">
              <h4 className="text-lg font-semibold">Red Women Purse</h4>
              {renderStars(2)}
              <p className="text-lg font-bold">$35</p>
            </div>
          </div>

          {/* Image Item 4 */}
          <div className="w-full sm:w-1/4 p-2">
            <img
              src="/red-women7.webp"
              alt="Red Women Purse 4"
              className="w-full h-auto object-cover rounded-lg"
            />
            <div className="text-center mt-2">
              <h4 className="text-lg font-semibold">Red Women Purse</h4>
              {renderStars(3)}
              <p className="text-lg font-bold">$35</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-10">
        <div className="container mx-auto">
          <div className="row flex flex-wrap justify-center">
            {/* Feature Box 1 */}
            <div className="featureBox col-md-3 col-sm-6 p-4 text-center m-4">
              <img
                src="/first-icon.webp"
                alt="Money Back Guarantee"
                className="mx-auto mb-2"
              />
              <h5 className="font-semibold text-base text-uppercase mb-2">
                Money Back Guarantee
              </h5>
              <p className="text-gray-600 mb-0">
                Great fill signs he evening
              </p>
            </div>

            {/* Feature Box 2 */}
            <div className="featureBox col-md-3 col-sm-6 p-4 text-center m-4">
              <img
                src="/2.png"
                alt="Free Delivery"
                className="mx-auto mb-2"
              />
              <h5 className="font-semibold text-base text-uppercase mb-2">
                Free Delivery
              </h5>
              <p className="text-gray-600 mb-0">
                Great fill signs he evening
              </p>
            </div>

            {/* Feature Box 3 */}
            <div className="featureBox col-md-3 col-sm-6 p-4 text-center m-4">
              <img
                src="/3.png"
                alt="Always Support"
                className="mx-auto mb-2"
              />
              <h5 className="font-semibold text-base text-uppercase mb-2">
                Always Support
              </h5>
              <p className="text-gray-600 mb-0">
                Great fill signs he evening
              </p>
            </div>

            {/* Feature Box 4 */}
            <div className="featureBox col-md-3 col-sm-6 p-4 text-center m-4">
              <img
                src="/4.webp"
                alt="Secure Payment"
                className="mx-auto mb-2"
              />
              <h5 className="font-semibold text-base text-uppercase mb-2">
                Secure Payment
              </h5>
              <p className="text-gray-600 mb-0">
                Great fill signs he evening
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Styles for Container, Heading, and Feature Boxes */}
      <style>{`
        .container {
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
          margin-right: auto;
          margin-left: auto;
        }

        .sec-heading .sec-title {
          font-size: 36px; /* Updated font size */
          text-align: center; /* Center text */
          text-transform: uppercase; /* Uppercase text */
          margin-bottom: 0; /* No bottom margin */
        }

        h1, h2, h3, h4, h5, h6 {
          color: #000; /* Text color */
          font-weight: 700; /* Bold font weight */
        }

        .featureBox {
          border: 1px solid #ebeef0;
          position: relative;
          padding: 27px; /* Updated padding to 27px */
          text-align: center;
        }

        .image-container {
          margin-bottom: 20px; /* Space between the image and text */
        }

        .row {
          display: -ms-flexbox;
          display: flex;
          -ms-flex-wrap: wrap;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
        }

        @media screen and (max-width: 767px) {
          .featureBox {
            margin-bottom: 30px;
          }
        }

        * {
          margin: 0;
          padding: 0;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
        }

        *, ::after, ::before {
          box-sizing: border-box;
        }

        body {
          color: #000;
          background-color: #fff;
          font-family: 'Roboto', sans-serif;
          font-weight: 400;
          font-size: 14px;
          line-height: 27px;
        }

        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          color: #212529;
          text-align: left;
        }

        .filled-star {
          color: gold; /* Color for filled stars */
        }

        .empty-star {
          color: lightgray; /* Color for empty stars */
        }
      `}</style>
    </div>
  );
};

export default Popular;