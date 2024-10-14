import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faApple, faAndroid } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-[#e9e2d8] py-16 w-full">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          <div className="relative text-left">
            <h1 className="text-base font-semibold mb-4">ABOUT US</h1>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Who we are</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Work with us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Become a supplier</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Investor relations</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Our devices</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Affiliate program</a></li>
            </ul>
          </div>

          <div className="relative text-left">
            <h1 className="text-base font-semibold mb-4">USEFUL LINKS</h1>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Who we are</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Work with us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Become a supplier</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Investor relations</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Our devices</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Affiliate program</a></li>
            </ul>
          </div>

          <div className="relative text-left">
            <h1 className="text-base font-semibold mb-4">ONLINE SHOPPING</h1>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Who we are</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Work with us</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Become a supplier</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Investor relations</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Our devices</a></li>
              <li><a href="#" className="text-gray-500 hover:text-gray-700 block text-sm">Affiliate program</a></li>
            </ul>
          </div>

          <div className="md:col-span-2 relative text-left flex flex-col items-start">
            <h1 className="text-base font-semibold mb-4">EXPERIENCE APP ON MOBILE</h1>
            <div className="flex justify-center border-b border-[#d6d8d9] pb-9">
              <a href="#" className="flex items-center justify-center w-32 h-10 bg-white border rounded-md shadow-md relative mr-2">
                <FontAwesomeIcon icon={faAndroid} className="text-[#3ddc84] text-lg absolute left-2 top-1/2 transform -translate-y-1/2" />
                <p className="text-black text-xs font-medium uppercase text-center ml-8">
                  <span className="block text-xs font-normal text-gray-600 mb-0">get it on</span>
                  Google Play
                </p>
              </a>
              <a href="#" className="flex items-center justify-center w-32 h-10 bg-[#ff5353] text-white border rounded-md shadow-md relative">
                <FontAwesomeIcon icon={faApple} className="text-white text-lg absolute left-2 top-1/2 transform -translate-y-1/2" /> 
                <p className="text-white text-xs font-medium uppercase text-center ml-8">
                  <span className="block text-xs font-normal text-white mb-0">get it on</span>
                  App Store
                </p>
              </a>
            </div>

            <h1 className="text-base font-semibold mb-4 mt-6">FOLLOW US</h1>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="w-8 h-8 bg-white border flex items-center justify-center shadow-md hover:bg-[#ff5353] hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faFacebookF} className="text-black hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white border flex items-center justify-center shadow-md hover:bg-[#ff5353] hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faTwitter} className="text-black hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white border flex items-center justify-center shadow-md hover:bg-[#ff5353] hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faPinterestP} className="text-black hover:text-white" />
              </a>
              <a href="#" className="w-8 h-8 bg-white border flex items-center justify-center shadow-md hover:bg-[#ff5353] hover:text-white transition duration-300">
                <FontAwesomeIcon icon={faInstagram} className="text-black hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="my-6 border-t border-[#d6d8d9]" />

      <div className="py-5 text-center text-gray-500 mb-0">
        <p className="mb-0">Copyright © 2024. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
