import React, { useState } from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom
import logo from '../assets/img/logo.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className=" flex items-center justify-center bg-white text-lime-300 dark:bg-black  ">
      <div className="max-w-2xl ">
        <header className="flex items-center justify-between ">
          {/* Wrap the logo image with Link to navigate to the home path */}
          <Link to="/">
            <img 
              src={logo} 
              alt="Logo" 
              className="w-[40%] md:w-[30%] lg:w-[45%] xl:w-[50%] lg:flex lg:justify-between xl:flex xl:justify-between" 
            />
          </Link>
          <button onClick={toggleMenu} className="space-y-2 md:ml-auto">
            <div className="w-8 h-0.5 bg-blue-300 dark:bg-lime-300"></div>
            <div className="w-8 h-0.5 bg-blue-300 dark:bg-lime-300"></div>
          </button>
        </header>
      </div>

      {/* Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black flex flex-col items-center justify-center text-blue-700 dark:text-lime-300 z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-5xl dark:text-lime-300">
            &times;
          </button>
          <nav className="text-2xl space-y-4 flex flex-col m-4">
            <Link to="/" className="hover:text-blue-500 dark:hover:text-lime-400" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/resume" className="hover:text-blue-500 dark:hover:text-lime-400" onClick={toggleMenu}>
              My Resume
            </Link>
            <Link to="/projects" className="hover:text-blue-500 dark:hover:text-lime-400" onClick={toggleMenu}>
              My Projects
            </Link>
            <Link to="/contact" className="hover:text-blue-500 dark:hover:text-lime-400" onClick={toggleMenu}>
              Contact
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
