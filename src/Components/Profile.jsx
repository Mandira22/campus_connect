import React from "react";

const ProfilePopover = () => {
  return (
    <div className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 z-50 border">
      <div className="flex items-center flex-col">
        <img
          src="https://via.placeholder.com/80"
          alt="Profile"
          className="w-20 h-20 rounded-full mb-2"
        />
        <span className="font-bold text-lg">Mandira Datta</span>
        <span className="text-sm text-gray-500">Kanker, Chhattisgarh</span>

        <button className="mt-3 border border-dashed border-gray-400 px-4 py-1 text-sm rounded hover:bg-gray-100">
          ＋ Experience
        </button>
      </div>
    </div>
  );
};

export default ProfilePopover;
