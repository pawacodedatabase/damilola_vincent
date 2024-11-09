import React from 'react';
import img from '../assets/img/hero.png';

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center h-[80vh] bg-cover bg-center bg-fixed text-center transition-colors duration-500 ease-in-out dark:bg-black"
      style={{
        backgroundImage: `url(${img})`, // Replace with your preferred background image URL
      }}
    >
      {/* Overlay that changes color based on dark mode */}
      <div className="absolute inset-0 bg-white dark:bg-black opacity-80 dark:opacity-70"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-4 py-12 text-black dark:text-white">
        <h1 className="text-5xl font-semibold tracking-tight md:text-6xl lg:text-7xl animate-fade-in-up bg-gradient-to-r from-pink-500 via-blue-500 to-blue-500 text-transparent bg-clip-text">
          Hi, I'm Damilola Vincent
        </h1>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl animate-fade-in-up delay-200 text-pink-500 dark:text-gray-300">
          A passionate web developer specializing in modern JavaScript frameworks and building beautiful, responsive web applications.
        </p>

        <br /> <br />
          <a href="/projects" className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-blue-500 rounded-full shadow-md group">
     <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-blue-500 group-hover:translate-x-0 ease">
         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
     </span>
     <span className="absolute flex items-center justify-center w-full h-full text-blue-500 transition-all duration-300 transform group-hover:translate-x-full ease">View Projects</span>
     <span className="relative invisible">Button Text</span>
 </a>
        
        
      </div>
    </section>
  );
};

export default Hero;
