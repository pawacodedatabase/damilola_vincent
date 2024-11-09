import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from './projects';
import Header from '../header';
import StarRating from './StarRating';

const ProjectList: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // This effect runs when the component mounts and sets up an automatic image change every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects[0].images.length);
    }, 3000); // Change image every 3 seconds

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  const handleNextImage = (projectIndex: number) => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % projects[projectIndex].images.length);
  };

  const handlePrevImage = (projectIndex: number) => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + projects[projectIndex].images.length) % projects[projectIndex].images.length);
  };

  // Helper function to truncate the description to 30 words
  const truncateDescription = (description: string) => {
    return description.split(' ').slice(0, 30).join(' ') + '...';
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-2xl font-semibold mb-10 text-center text-gray-600 dark:text-lime-300 bg-gray-300 p-3 dark:bg-black dark:border dark:border-gray-300">Hosted Projects</h1>

        <div className="space-y-8">
          {projects.map((project, projectIndex) => (
            <div
              key={project.id}
              className="p-6 bg-white rounded-xl shadow-2xl hover:shadow-2xl dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 transform hover:scale-105"
            >
              {/* Project Header */}
              <h2 className="text-3xl font-semibold text-center text-indigo-800 dark:text-lime-200 mb-4">{project.name}</h2>

              {/* Image Slider */}
              <div className="mt-4 relative">
                <div className="flex justify-center">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`Project Image ${currentImageIndex + 1}`}
                    className="w-full h-64 object-cover rounded-lg shadow-md"
                  />
                </div>

                {/* Slider Navigation */}
                <button
                  onClick={() => handlePrevImage(projectIndex)}
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full"
                >
                  &#8592;
                </button>
                <button
                  onClick={() => handleNextImage(projectIndex)}
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-gray-800 bg-opacity-50 p-3 rounded-full"
                >
                  &#8594;
                </button>
              </div>

              {/* Truncated Project Description */}
              <p className="text-lg mt-4 text-gray-700 dark:text-gray-300">{truncateDescription(project.description)}</p>

              {/* Project Date */}
              <div className="mt-4">
                <p className="text-gray-600 dark:text-gray-400 text-sm">Date: {project.date}</p>
              </div>

              {/* Star Rating */}
              <div className="mt-4">
                <StarRating initialRating={4} />
              </div>

              {/* Project Buttons */}
              <div className="mt-6 flex space-x-6 flex flex-row justify-center">
              
                <Link
                  to={`/projects/${project.id}`}
                  className="bg-black border border-white text-white px-3 py-4 rounded-lg hover:bg-gray-800 transition-all duration-300 text-sm"
                >
                  View Details
                </Link>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-black px-3 py-4 rounded-lg hover:bg-black hover:text-white transition-all duration-300 border border-black text-sm "
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
