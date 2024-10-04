import React from 'react';
import { Mail, Twitter, Facebook, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div className="bg-green-100 text-black py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-10">
        {/* Company Section */}
        <div>
          <h2 className="text-green-700 text-xl font-bold mb-4">Company</h2>
          <ul className="space-y-2">
            <li>Blogs</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>How to Buy and Sell</li>
            <li>Become a vendor</li>
            <li>Terms & conditions</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* Offerings Section */}
        <div>
          <h2 className="text-green-700 text-xl font-bold mb-4">Offerings</h2>
          <ul className="space-y-2">
            <li>Energy calculator</li>
            <li>Power as a service</li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div>
          <h2 className="text-green-700 text-xl font-bold mb-4">Get in touch</h2>
          <ul className="space-y-2">
            <li>FAQs</li>
            <li>20, Marina, Lagos State</li>
            <li>+234 (081) 6413 3937</li>
            <li>+234 (081) 3547 3439</li>
            <li>info@pppppppppp</li>
          </ul>

          <h2 className="text-green-700 text-xl font-bold mt-6 mb-4">Follow us</h2>
          <div className="flex space-x-4 mb-6">
            <Twitter className="text-black w-6 h-6" />
            <Facebook className="text-black w-6 h-6" />
            <Mail className="text-black w-6 h-6" />
            <Linkedin className="text-black w-6 h-6" />
          </div>

          <p>Can't find what you're looking for?</p>
          <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded-md">
            Send Us An Email
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;