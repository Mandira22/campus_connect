import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa";
import ProfilePopover from "./Profile.jsx";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showProfile, setShowProfile] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="py-4 border-b-2 border-gray-300 bg-red-500 w-full relative">
      <div className="container flex items-center justify-between px-9">
        {/* Menu Icon */}
        {/* REMOVE or MODIFY: md:hidden */}
        <button onClick={toggleMenu} className="text-2xl">
          {" "}
          {/* Changed here */}
          <CiMenuBurger />
        </button>

        <Link to="/" className="text-2xl font-bold">
          Campus Connect
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/discover" className="hover:text-primary transition-colors">
            Discover
          </Link>
          <Link
            to="/community"
            className="hover:text-primary transition-colors"
          >
            Community
          </Link>
          <Link to="/about-us" className="hover:text-primary transition-colors">
            About Us
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          
          <div className="relative">
            <button onClick={() => setShowProfile(!showProfile)} className="text-white text-2xl">
              <FaUserCircle />
            </button>

            {showProfile && <ProfilePopover/>}
          </div>

          <Link
            to="/register"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-3 rounded text-sm"
          >
            Register
          </Link>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 w-65 h-150 bg-red-50 shadow-lg z-50">
          <ul className="flex flex-col p-13 gap-10 text-gray-800">
            <li>
              <Link to="/application" onClick={toggleMenu}>
                📄 Application
              </Link>
            </li>
            <li>
              <Link to="/resume" onClick={toggleMenu}>
                📁 Resume
              </Link>
            </li>
            <li>
              <Link to="/wishlist" onClick={toggleMenu}>
                ❤️ Wishlist
              </Link>
            </li>
            <li>
              <Link to="/offerletters" onClick={toggleMenu}>
                📬 Offer Letters
              </Link>
            </li>
            <li>
              <Link to="/prep-materials" onClick={toggleMenu}>
                📚 Prep Materials
              </Link>
            </li>
            <li>
              <Link to="/interviews" onClick={toggleMenu}>
                🗣️ Interviews
              </Link>
            </li>
            {/* NEW ITEM: Resume Builder */}
            <li>
              <Link to="/resume-builder" onClick={toggleMenu}>
                📝 Resume Builder
              </Link>
            </li>
            {/* NEW ITEM: Jobs Applied To */}
            <li>
              <Link to="/jobs-applied" onClick={toggleMenu}>
                ✅ Jobs Applied To
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
