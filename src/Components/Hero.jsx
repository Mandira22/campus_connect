import React from "react";

const HeroSection = () => {
  return (
    <div className="h-screen bg-emerald-50 relative overflow-hidden">
      {/* Added relative and overflow-hidden */}
      <div className="absolute top-10 right-10 w-1/2 h-full -z-0 animate-pulse">
        <img
          src="circle2.png"
          alt="circle"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute top-5 right-10 w-1/2 h-full ">
        {" "}
        {/* Position to the top-right and take half the height */}
        <img
          src="man developer.png"
          alt="Job Search Illustration"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="relative py-16 md:py-32">
        {" "}
        {/* Keep this relative for the text and input */}
        <div className="text-4xl sm:text-5xl md:text-6xl font-bold text-zinc-800 pt-15 px-30 mb-0 bg-clip-text">
          Find Exciting
          <br /> Jobs Today.
        </div>
        <div className="pt-6 px-30 fond-bold">
          Get the most exciting jobs from all around <br />
          the world and grow your career fast with others.
        </div>
        <div className="pt-15 px-29">
          <div className="flex items-center bg-white rounded-xl shadow-md p-4 gap-4 w-full max-w-3xl">
            {/* Location Input */}
            <div className="flex flex-col flex-1">
              <label className="text-sm font-medium text-gray-800">
                Location
              </label>
              <input
                type="text"
                placeholder="Enter preferred location"
                className="outline-none text-sm text-gray-600 placeholder-gray-400 bg-transparent mt-1"
              />
            </div>

            {/* Type Input */}
            <div className="flex flex-col flex-1 ">
              <label className="text-sm font-medium text-gray-800">Type</label>
              <input
                type="text"
                placeholder="What kind of role do you want?"
                className="outline-none text-sm text-gray-600 placeholder-gray-400 bg-transparent mt-1"
              />
            </div>
            <button className="bg-[#0A043C] text-white px-6 py-3 rounded-lg text-sm font-medium  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:opacity-90">
              Explore Now
            </button>
          </div>
        </div>
        <div className="pt-6 px-30">
          Popular Search:{" "}
          <span className="text-sm text-gray-500">
            Software Developer, UX Designer, Marketer
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
