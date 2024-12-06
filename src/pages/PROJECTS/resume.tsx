import React, { useState, useEffect } from 'react';
import { FaUserAlt, FaBriefcase, FaGraduationCap, FaTools, FaDownload } from 'react-icons/fa';

import img from '../../assets/img/hero - Copy.png'
import cv from '../../assets/Damilola-Vincent_Cv-upd.pdf'
import Header from '../header';

const ResumeSection: React.FC = () => {
  // State to trigger animations once the component is mounted
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // After the component mounts, trigger the visibility state
    setIsVisible(true);
  }, []);

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
        <div className="max-w-5xl mx-auto p-6">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-8 bg-white dark:bg-gray-800 p-6 rounded shadow">
            {/* Profile Section */}
            <div className="flex items-center">
              <img
                src={img}
                alt="Profile"
                className="w-24 h-24 rounded-full border-4 border-blue-500 shadow-lg"
              />
              <div className="ml-4">
                <h1 className="text-2xl font-bold">Damilola Vincent</h1>
                <p className="text-gray-600 dark:text-gray-400">Front-End Developer</p>
                <p className="text-sm">Passionate about responsive designs and user-friendly interfaces.</p>
              </div>
            </div>
            {/* Download Resume Button */}
            <div className="mt-4 md:mt-0">
              <a
                href={cv}
                download="Damilola_Vincent_Resume.pdf"
                className="flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500 shadow transition"
              >
                <FaDownload className="mr-2" /> Download Resume
              </a>
            </div>
          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* About Me */}
            <div
              className={`bg-white dark:bg-gray-800 p-6 rounded shadow transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center mb-4">
                <FaUserAlt className="text-2xl text-blue-600 dark:text-blue-400 mr-3" />
                <h2 className="text-xl font-bold">About Me</h2>
              </div>
              <p>
                Passionate responsive front-end web developer specializing in React, TypeScript, and UI/UX design. I bring
                cutting-edge designs and expertise in modern frameworks.
              </p>
            </div>

            {/* Expertise */}
            <div
              className={`bg-white dark:bg-gray-800 p-6 rounded shadow transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center mb-4">
                <FaTools className="text-2xl text-green-600 dark:text-green-400 mr-3" />
                <h2 className="text-xl font-bold">Expertise</h2>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <FaUserAlt className="mr-2 text-blue-600 dark:text-blue-400" /> HTML & CSS
                </li>
                <li className="flex items-center">
                  <FaUserAlt className="mr-2 text-blue-600 dark:text-blue-400" /> React
                </li>
                <li className="flex items-center">
                  <FaUserAlt className="mr-2 text-blue-600 dark:text-blue-400" /> JavaScript
                </li>
                <li className="flex items-center">
                  <FaUserAlt className="mr-2 text-blue-600 dark:text-blue-400" /> Python
                </li>
                <li className="flex items-center">
                  <FaUserAlt className="mr-2 text-blue-600 dark:text-blue-400" /> UI/UX Design
                </li>
                <li className="flex items-center">
                  <FaUserAlt className="mr-2 text-blue-600 dark:text-blue-400" /> TypeScript
                </li>
              </ul>
            </div>

            {/* Education */}
            <div
              className={`bg-white dark:bg-gray-800 p-6 rounded shadow transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center mb-4">
                <FaGraduationCap className="text-2xl text-purple-600 dark:text-purple-400 mr-3" />
                <h2 className="text-xl font-bold">Education</h2>
              </div>
              <p>
                <strong>2014-2018:</strong> BSc in Pharmacology, Olabisi Onabanjo University
              </p>
              <p>
                <strong>2024:</strong> JavaScript & Python, Web Development at Aptech Computer Training
              </p>
            </div>

            {/* Work Experience */}
            <div
              className={`bg-white dark:bg-gray-800 p-6 rounded shadow transition-all duration-500 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            >
              <div className="flex items-center mb-4">
                <FaBriefcase className="text-2xl text-red-600 dark:text-red-400 mr-3" />
                <h2 className="text-xl font-bold">Work Experience</h2>
              </div>
              <ul className="space-y-2">
                <li>
                  <strong>2012:</strong> WordPress Web Developer
                </li>
                <li>
                  <strong>2020:</strong> Web Manager at NYSC GidIbest
                </li>
                <li>
                  <strong>2023:</strong> Sales Representative at Sterling Bank (Contract)
                </li>
                <li>
                  <strong>2024:</strong> Front-End Developer at Zilt Real Estate
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResumeSection;
