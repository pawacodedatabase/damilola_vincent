import React from 'react';

const PageComponent: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent dark:bg-gray-900 flex items-center justify-center p-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-6xl w-full">
        
        {/* Design Section */}
        <div className="flex flex-col items-start animate-fade-in-left space-y-4">
          <div className="flex items-center space-x-2">
            <svg width="24" height="24" className="text-purple-500 fill-current">
              <circle cx="12" cy="12" r="12" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold text-purple-600">Design</h2>
          <p className="text-gray-600 dark:text-gray-300">
          I’m a passionate designer with a keen eye for detail and a love for creating seamless, user-centric experiences. With expertise in Figma, Canva, and web design, I craft visually compelling and intuitive designs that bring ideas to life. Whether I’m working on UI/UX, branding, or digital illustrations, I’m always focused on blending creativity with functionality to deliver designs that not only look great but also work effortlessly. Let’s make your vision a reality!
          </p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-3 h-3 bg-purple-300 rounded-full animate-ping"></div>
            ))}
          </div>
        </div>
        
        {/* Engineering Section */}
        <div className="flex flex-col items-start animate-fade-in-right space-y-4">
          <h2 className="text-4xl font-bold text-purple-600">Engineering</h2>
          <p className="text-gray-600 dark:text-gray-300">
          I’m a dedicated front-end engineer with a strong foundation in building interactive, responsive, and user-friendly web applications. With expertise in HTML, CSS, JavaScript, React, and TypeScript, I specialize in transforming design concepts into functional, visually appealing websites. I’m passionate about creating seamless user experiences, optimizing performance, and ensuring cross-browser compatibility. Continuously staying up to date with the latest front-end technologies, I aim to deliver clean, maintainable code and bring innovative ideas to life in every project.
          </p>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="w-3 h-3 border border-purple-300 rounded-full"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageComponent;
