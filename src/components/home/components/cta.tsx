import React from "react";

const CTA = () => {
  return (
    <div className="py-16 bg-gradient-to-r from-green-600 to-green-700 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Join Our School?</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Take the first step towards excellence. Contact us to learn more about
          admission processes and available programs.
        </p>
        <div className="flex gap-4 justify-center">
          <button
            className="bg-white text-green-600 px-6 py-3 rounded-lg 
              hover:bg-gray-100 transition-colors"
          >
            Admission Enquiry
          </button>
          <button
            className="border-2 border-white px-6 py-3 rounded-lg 
              hover:bg-green-700 transition-colors"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default CTA;
