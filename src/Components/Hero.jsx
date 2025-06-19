import React from "react";

const HeroSection = () => {
  return (
    <div className="bg-[url('/Rungta_College_Campus.jpg')] bg-cover bg-no-repeat bg-center h-screen   relative overflow-hidden"
>

        <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
      {/* Added relative and overflow-hidden */}
      
      <div className="relative py-16 ">
        {" "}
        {/* Keep this relative for the text and input */}
        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-zinc-800 pt-8 sm:pt-10 md:pt-16 px-4 sm:px-3 md:px-12 lg:px-30 mb-0 bg-clip-text">
          <span className="block sm:block md:hidden lg:hidden">
            Find Exciting Jobs Today.
          </span>

          {/* Medium and large screens multiline */}
          <span className="hidden md:inline">
            Find Exciting <br />
            Jobs Today.
          </span>
        </div>
        <div className="pt-6 px-30 fond-bold">
          Get the most exciting jobs from all around <br />
          the world and grow your career fast with others.

          <span className=""></span>
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
          <span className="text-sm text-gray-900">
            Software Developer, UX Designer, Marketer
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
