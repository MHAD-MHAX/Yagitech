import React from 'react';
import { Battery, Clock, CheckSquare } from 'lucide-react';

import { Link } from "react-router-dom";


const EnergyAuditPage = () => {
  return (
   
    <div className="bg-yellow-50 p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[600px] lg:max-w-[1500px] mx-auto font-sans">
      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 md:p-10">
        <div className="flex flex-col sm:flex-row items-center mb-6 sm:mb-8">
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-green-100 rounded-full flex items-center justify-center mb-4 sm:mb-0 sm:mr-6">
            <Battery className="w-16 h-16 sm:w-20 sm:h-20 text-green-600" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-3xl sm:text-4xl font-bold mb-2 sm:mb-4">
              <span className="text-green-600">Evaluation:</span> Energy Audits
            </h1>
            <h2 className="text-xl sm:text-2xl font-bold">For Everyone</h2>
          </div>
          <div className="mt-4 sm:mt-0">
            <Clock className="w-16 h-16 sm:w-20 sm:h-20 text-green-600" />
          </div>
        </div>
        
        <ul className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
          {[
            "Calculate the energy consumption for your home, business, or community.",
            "Request for onsite energy consumption evaluation.",
            "Start with our solar calculator to find out what you could save and power."
          ].map((text, index) => (
            <li key={index} className="flex items-start">
              <CheckSquare className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-500 mr-2 sm:mr-3 flex-shrink-0" />
              <span className="text-base sm:text-lg">{text}</span>
            </li>
          ))}
        </ul>
        
        <Link to ="/calculator">
        <button className="w-full bg-green-600 text-white py-3 sm:py-4 rounded-md text-lg sm:text-xl font-semibold">
          Make A Request
        </button>
        </Link>
      </div>
    </div>
  );
};

export default EnergyAuditPage;