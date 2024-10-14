import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons';

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

          <div className="md:col-span-2 relative text-left">
            <h1 className="text-base font-semibold mb-4">EXPERIENCE APP ON MOBILE</h1>
            <div className="flex justify-center border-b border-[#d6d8d9] pb-9">
              <a href="#" className="flex items-center justify-center w-32 h-10 bg-white border rounded-md shadow-md relative mr-2"> {/* Zmniejszenie wysokości */}
                <i className="text-[#ff5353] text-lg absolute left-2 top-1/2 transform -translate-y-1/2"></i>
                <p className="text-black text-xs font-medium uppercase text-center ml-8"> {/* Zmniejszenie czcionki */}
                  <span className="block text-xs font-normal text-gray-600 mb-0">get it on</span>
                  Google Play
                </p>
              </a>
              <a href="#" className="flex items-center justify-center w-32 h-10 bg-[#ff5353] text-white border rounded-md shadow-md relative">
                <i className="text-white text-lg absolute left-2 top-1/2 transform -translate-y-1/2"></i>
                <p className="text-white text-xs font-medium uppercase text-center ml-8">
                  <span className="block text-xs font-normal text-white mb-0">get it on</span>
                  App Store
                </p>
              </a>
            </div>

            <h1 className="text-base font-semibold mb-4">ONLINE SHOPPING</h1>
            <div className="flex space-x-4 justify-center">
              <a href="#" className="w-8 h-8 bg-white border flex items-center justify-center shadow-md">
                <FontAwesomeIcon icon={faFacebookF} className="text-black" />
              </a>
              <a href="#" className="w-8 h-8 bg-white border flex items-center justify-center shadow-md">
                <FontAwesomeIcon icon={faTwitter} className="text-black" />
              </a>
              <a href="#" className="w-8 h-8 bg-white border flex items-center justify-center shadow-md">
                <FontAwesomeIcon icon={faPinterestP} className="text-black" />
              </a>
              <a href="#" className="w-8 h-8 bg-white border flex items-center justify-center shadow-md">
                <FontAwesomeIcon icon={faInstagram} className="text-black" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="py-5 text-center text-gray-500 mb-0">
        <p className="mb-0">© 2024 Company. All Rights Reserved.</p>
        <a href="#" className="text-[#ff5353]">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
