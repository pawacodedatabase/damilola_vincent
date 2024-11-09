import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HiSun, HiMoon, HiHome } from 'react-icons/hi';
import Home from './pages/home';


import ProjectList from './pages/PROJECTS/projectList';
import ProjectDetail from './pages/PROJECTS/projectDetails';
import ScrollToTop from './components/ScrollToTop';
import ContactDashboard from './pages/contact';


const App: React.FC = () => {
  // Track the current theme state
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem('theme', darkMode ? 'light' : 'dark');
  };

  // Apply theme class to the document body
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <>
   
    <Router>
      
      <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-white text-gray-900'}`}>
        
        {/* Main Container */}
        <div className="container mx-auto p-4">
          <ScrollToTop>
            {/* Routes */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<ContactDashboard />} />
              <Route path="/projects" element={<ProjectList />} /> {/* List of projects */}
              <Route path="/projects/:id" element={<ProjectDetail />} /> {/* Individual project details */}
            </Routes>
          </ScrollToTop>
        </div>

        {/* Home Button (Left) */}
        <Link 
          to="/" 
          className="fixed bottom-4 left-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
          aria-label="Go to Home Page"
        >
          <HiHome size={24} />
        </Link>

        {/* Dark Mode Toggle Button (Right) */}
        <button 
          onClick={toggleDarkMode}
          className="fixed bottom-4 right-4 p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white shadow-lg hover:bg-gray-300 dark:hover:bg-gray-600 transition-all duration-300"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? <HiSun size={24} /> : <HiMoon size={24} />}
        </button>
      </div>
    </Router></>
  );
};

export default App;