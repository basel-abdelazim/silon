import React from "react";

const FeaturedProducts = () => {
  return (
    <section className="bg-white py-10">
      <header className="text-center mb-8">
        <h2 className="text-4xl font-bold text-uppercase mb-4">Featured Products</h2>
      </header>
      <div className="flex flex-wrap justify-center">
        <div className="relative w-full sm:w-1/3 p-2 flex justify-center product-item">
          <div className="product-thumb mb-7">
            <img
              src="/red-women4.webp"
              alt="Featured Product 1"
              className="w-full h-auto object-cover rounded-lg transition-transform transform hover:scale-105"
            />
            <div className="text-center product-content mt-4">
              <p className="product-name text-sm font-normal text-gray-600 mb-1 capitalize">Red Women Purses</p>
              <div className="ratings mb-1">
                <span className="text-red-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="price text-black text-lg font-medium mb-0">$35.00</p>
            </div>
          </div>
        </div>

        <div className="relative w-full sm:w-1/3 p-2 flex justify-center product-item">
          <div className="product-thumb mb-7">
            <img
              src="/red-women5.webp"
              alt="Featured Product 2"
              className="w-full h-auto object-cover rounded-lg transition-transform transform hover:scale-105"
            />
            <div className="text-center product-content mt-4">
              <p className="product-name text-sm font-normal text-gray-600 mb-1 capitalize">Red Women Purses</p>
              <div className="ratings mb-1">
                <span className="text-red-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="price text-black text-lg font-medium mb-0">$35.00</p>
            </div>
          </div>
        </div>

        <div className="relative w-full sm:w-1/3 p-2 flex justify-center product-item">
          <div className="product-thumb mb-7">
            <img
              src="/red-women6.webp"
              alt="Featured Product 3"
              className="w-full h-auto object-cover rounded-lg transition-transform transform hover:scale-105"
            />
            <div className="text-center product-content mt-4">
              <p className="product-name text-sm font-normal text-gray-600 mb-1 capitalize">Red Women Purses</p>
              <div className="ratings mb-1">
                <span className="text-red-500">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="price text-black text-lg font-medium mb-0">$35.00</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid mx-auto px-4 mt-10 flex items-center banner02">
        <div className="banner-content col-md-6" style={{ marginRight: "20px" }}>
          <h1
            className="h1"
            style={{
              fontFamily: '"Dancing Script", cursive',
              fontWeight: 700,
              textTransform: "uppercase",
              marginBottom: "33px",
            }}
          >
            50% OFF
          </h1>
          <h4
            className="h4"
            style={{
              fontWeight: 300,
              fontSize: "1.5rem",
              textTransform: "uppercase",
              marginBottom: "54px",
            }}
          >
            Women’s Collection
          </h4>
          <a href="#" className="btn-default">Shop Now</a>
        </div>
        <img
          src="/ban-2.webp"
          alt="Banner"
          className="banner-image"
          style={{
            display: "block",
            width: "100%",
            height: "auto",
            verticalAlign: "middle",
            borderStyle: "none",
          }}
        />
      </div>

      <style>
        {`
          .banner02 {
            background-color: #eae2d8;
            display: flex;
            align-items: center;
            padding: 20px;
            justify-content: space-between;
          }

          .banner-content {
            text-align: left;
            max-width: 50%;
          }

          .btn-default {
            background-color: #ff5353;
            border-radius: 3px;
            color: #fff;
            text-transform: uppercase;
            padding: 20px 25px;
            font-size: 14px;
            font-weight: 500;
            line-height: 1.2;
            transition: background-color 300ms ease-in-out, color 300ms ease-in-out;
          }

          .btn-default:hover {
            background-color: #fff;
            color: #ff5353;
          }

          .banner-content h1, 
          .banner-content h4 {
            margin-bottom: .5rem;
            line-height: 1.2;
            color: #000;
          }

          .banner-content h1 {
            font-family: "Dancing Script", cursive;
            font-weight: 700;
            font-size: 58px;
            line-height: 70px;
            margin-bottom: 45px;
          }

          .banner-content h4 {
            font-weight: 300;
            font-size: 1.5rem;
            margin-bottom: 54px;
          }

          @media (min-width: 768px) {
            .banner-content {
              flex: 0 0 50%;
              max-width: 50%;
            }

            .banner-content h1,
            .banner-content h4,
            .btn-default {
              width: 100%;
            }
          }

          @media screen and (max-width: 991px) {
            .banner02 .banner-content h1 {
              font-size: 40px;
              line-height: 56px;
              margin-bottom: 35px;
            }

            .banner02 .banner-content h1 {
              margin-bottom: 10px;
            }
          }

          @media screen and (max-width: 767px) {
            .feat-product,
            .popular-products,
            .trending-products {
              padding-bottom: 20px;
            }

            .product-item {
              margin-bottom: 30px;
            }

            .banner02 {
              flex-direction: column;
              align-items: flex-start;
            }

            .banner-content {
              max-width: 100%;
              margin-bottom: 20px;
            }

            .btn-default {
              width: 100%;
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
        `}
      </style>
    </section>
  );
};

export default FeaturedProducts;
