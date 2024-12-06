import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";  // Import Link and useNavigate
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from "react-icons/fa"; // Login/SignUp/Logout Icons
import logo from '../assets/img/logo.png';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Check if user is logged in (via localStorage or session)
  useEffect(() => {
    const user = localStorage.getItem('user');  // Retrieve user data from localStorage
    if (user) {
      setIsLoggedIn(true); // Set login state if user data is found
    }
  }, []);

  // Handle Logout
  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    
    // Reset logged-in state
    setIsLoggedIn(false);

    // Redirect to login page or homepage
    navigate('/login'); // Or use '/home' if you'd like to redirect to the homepage

    // Close the menu after logout
    setMenuOpen(false);
  };

  // Combined handler for Logout and closing the menu
  const handleLogoutAndCloseMenu = () => {
    handleLogout();  // Handle logout logic
    toggleMenu();    // Close the menu
  };

  return (
    <div className="flex items-center justify-between bg-white text-lime-300 dark:bg-black">
      <div className="max-w-2xl flex justify-between w-full items-center">
        {/* Logo */}
        <Link to="/">
          <img 
            src={logo} 
            alt="Logo" 
            className="w-[40%] md:w-[30%] lg:w-[45%] xl:w-[50%]" 
          />
        </Link>

        {/* Navbar Icon Toggle Button */}
        <button onClick={toggleMenu} className="space-y-2 md:ml-auto">
          <div className="w-8 h-0.5 bg-blue-300 dark:bg-lime-300"></div>
          <div className="w-8 h-0.5 bg-blue-300 dark:bg-lime-300"></div>
        </button>
      </div>

      {/* Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-white dark:bg-black flex flex-col items-center justify-center text-blue-700 dark:text-lime-300 z-50">
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-5xl dark:text-lime-300">
            &times;
          </button>
          <nav className="text-2xl space-y-4 flex flex-col m-4">
            {/* Navigation Links */}
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

            

            {/* Conditional rendering for Login/Signup and Logout */}
            {!isLoggedIn ? (
              <>
                <Link to="/login" className="hover:text-blue-500 dark:hover:text-lime-400 flex items-center space-x-2" onClick={toggleMenu}>
                  <FaSignInAlt />
                  <span>Login</span>
                </Link>
                <Link to="/signup" className="hover:text-blue-500 dark:hover:text-lime-400 flex items-center space-x-2" onClick={toggleMenu}>
                  <FaUserPlus />
                  <span>Sign Up</span>
                </Link>
              </>
            ) : (
              <button onClick={handleLogoutAndCloseMenu} className="hover:text-blue-500 dark:hover:text-lime-400 flex items-center space-x-2">
                <FaSignOutAlt />
                <span>Logout</span>
              </button>
            )}
          </nav>
        </div>
      )}
    </div>
  );
};

export default Header;
