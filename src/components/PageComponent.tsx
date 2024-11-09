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
            I'm probably not the typical designer positioned behind an Illustrator artboard adjusting pixels, but I design.
            Immersed in stylesheets tweaking font sizes and contemplating layouts is where you'll find me (~_^). I'm committed to creating fluent user experiences while staying fashionable.
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
            In building JavaScript applications, I'm equipped with just the right tools, and can absolutely function independently to deliver fast, resilient solutions optimized for scale — performance and scalability are priorities on my radar.
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
