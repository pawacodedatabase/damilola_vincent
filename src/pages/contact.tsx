import React, { useState, useEffect } from 'react';
import { FiBriefcase, FiDownload } from 'react-icons/fi';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import cv from '../assets/Damilola-Vincent_Cv-upd.pdf'; // Replace with your actual avatar path
import 'animate.css'; // Make sure animate.css is properly imported
import FormComponent from '../components/formComponent';
import Header from './header';

const ContactDashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Retrieve user data from localStorage
    }
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'short',
    day: 'numeric',
  });

  return (
    <>
      <Header />
      {/* Contact Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold animate__animated animate__fadeIn">Contact / Hire Me</h1>
        <p className="mt-4 animate__animated animate__fadeIn animate__delay-1s">I'm a React web developer ready to bring your ideas to life.</p>
      </div>

      {/* Dashboard Section */}
      <div className="p-6">
        {/* Greeting */}
        {user ? (
          <>
            <h1 className="text-2xl  mb-3 font-semibold animate__animated animate__fadeIn animate__delay-2s">
              Hello {user.username} , I'm Damilola Vincent
            </h1>
            <p className='text-green-600 border p-3 rounded-full w-[full] text-center'>{user.email}</p>
            <p className="text-gray-500 dark:text-gray-400 animate__animated animate__fadeIn animate__delay-3s">{currentDate}</p>
          </>
        ) : (
          <p>Loading user information...</p>
        )}




        {/* Project Summary */}
        <div className="mt-6 text-gray-700 dark:text-gray-300 animate__animated animate__fadeIn animate__delay-4s">
          <p>20+ Projects Completed  </p>
          <p>Specialized in React, JavaScript, Python and TypeScript</p>
          <div className="flex items-center bg-gray-100 dark:bg-gray-800 p-4 mt-4 rounded-lg shadow-md">
            <FiBriefcase className="w-6 h-6 text-gray-600 dark:text-gray-300" />
            <div className="ml-4">
              <p className="text-xl font-bold">Available for Hire</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">Let's work together on your next project</p>
            </div>
          </div>
        </div>

        {/* Favorite Skills */}
        <h2 className="mt-6 mb-4 text-lg font-medium animate__animated animate__fadeIn animate__delay-5s">Favorite Skills</h2>
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 py-2 px-4 rounded-lg animate__animated animate__fadeIn animate__delay-6s">
            React
          </button>
          <button className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 py-2 px-4 rounded-lg animate__animated animate__fadeIn animate__delay-7s">
            JavaScript 
          </button>
          <button className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 py-2 px-4 rounded-lg animate__animated animate__fadeIn animate__delay-8s">
            TypeScript
          </button>
          <button className="flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 py-2 px-4 rounded-lg animate__animated animate__fadeIn animate__delay-9s">
            TailwindCSS
          </button>
        </div>

        {/* Social Icons Section */}
        <div className="mt-8 flex justify-center space-x-6 animate__animated animate__fadeIn animate__delay-10s">
          <div className="w-6 h-6 text-gray-400 dark:text-gray-500 text-2xl hover:dark:text-white hover:text-black">
            <a href="#"><FaFacebook /></a>
          </div>
          <div className="w-6 h-6 text-gray-400 dark:text-gray-500 text-2xl hover:dark:text-white hover:text-black">
            <a href="https://x.com/viceSensei"><FaTwitter /></a>
          </div>
          <div className="w-6 h-6 text-gray-400 dark:text-gray-500 text-2xl hover:dark:text-white hover:text-black">
            <a href="https://instagram.com/its.damilola"><FaInstagram /></a>
          </div>
          <div className="w-6 h-6 text-gray-400 dark:text-gray-500 text-2xl hover:dark:text-white hover:text-black">
            <a href="https://www.linkedin.com/in/damilola-ogunbanwo-1347b5284/"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact Form */}
        <FormComponent />

        {/* Download Resume Button */}
        <div className="mt-8 text-center">
          <a href={cv} download>
            <button className="flex items-center justify-center bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-300">
              <FiDownload className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactDashboard;
