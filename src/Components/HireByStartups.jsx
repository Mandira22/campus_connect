import React from "react";

const HireByStartups = () => {
  return (
    <div className="bg-gray-200 h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-30 items-center">
        {/* Left Column - Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">
            Get hired by the{" "}
            <span className="text-indigo-500">popular startups.</span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
          <button className="bg-gradient-to-r from-orange-400 to-orange-500 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-1">
            Check Listing
          </button>
        </div>
        <div className=" w-85 h-110">
          <img
            src="working-man.jpg"
            alt="Another Startup Team"
            className="w-full h-full object-cover rounded-lg shadow-md"
          />
        </div>
        <div className=" grid grid-rows-2 gap-4">
          <div className="w-74 h-84"> {/* Added w-24 and h-24 */}
            <img
              src="working-man.jpg"
              alt="Startup Team Member 1"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="w-74 h-44"> {/* Added w-24 and h-24 */}
            <img
              src="working-man.jpg"
              alt="Startup Team Member 2"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

    </div>
      </div>
    </div>
  );
};

export default HireByStartups;


{/*<img
src="public/working-man.jpg"
alt="Another Startup Team"
className="w-full h-full object-cover"
/>*/}