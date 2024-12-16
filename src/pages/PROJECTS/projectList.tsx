import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { projects } from './projects';
import { FaArrowLeft, FaArrowRight, FaCalendarAlt, FaRedditAlien } from 'react-icons/fa';

import Header from '../header';
import StarRating from './StarRating';
import { FaAudioDescription } from 'react-icons/fa6';

const ProjectList: React.FC = () => {
  const [currentImageIndexes, setCurrentImageIndexes] = useState(
    projects.map(() => 0) // Store the current image index for each project
  );

  // Navigate to next image for a specific project
  const handleNextImage = (projectIndex: number) => {
    setCurrentImageIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex ? (index + 1) % projects[i].images.length : index
      )
    );
  };

  // Navigate to previous image for a specific project
  const handlePrevImage = (projectIndex: number) => {
    setCurrentImageIndexes((prevIndexes) =>
      prevIndexes.map((index, i) =>
        i === projectIndex
          ? (index - 1 + projects[i].images.length) % projects[i].images.length
          : index
      )
    );
  };

  // Helper function to truncate the description
  const truncateDescription = (description: string, wordLimit: number = 15) => {
    return description.split(' ').slice(0, wordLimit).join(' ') + '...';
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-8 text-center  dark:text-purple-400">
          Hosted Projects
        </h1>
        <br /> <br />
        <div className="grid grid-cols-1 sm:grid-cols-2 p-5 lg:grid-cols-3 gap-6">
          {projects.map((project, projectIndex) => (
            <div
              key={project.id}
              className="bg-white dark:bg-[#2E1A47]  m-auto  shadow-md mb-9 rounded-lg overflow-hidden p-5 transition-transform transform hover:scale-105"
            >
              {/* Image Slider */}
              <div className="relative h-48">
                <img
                  src={project.images[currentImageIndexes[projectIndex]]}
                  alt={`Project ${project.name}`}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => handlePrevImage(projectIndex)}
                  className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full shadow-md hover:bg-purple-700"
                  aria-label="Previous Image"
                >
                  <FaArrowLeft />
                </button>
                <button
                  onClick={() => handleNextImage(projectIndex)}
                  className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-purple-600 text-white p-2 rounded-full shadow-md hover:bg-purple-700"
                  aria-label="Next Image"
                >
                  <FaArrowRight />
                </button>
              </div>

              {/* Project Details */}
              <div className="p-4">
              <div className='flex gap-2  '><FaRedditAlien/> <FaAudioDescription/>
                </div>
                <h2 className="text-lg font-semibold text-purple-700 dark:text-purple-400 mb-2">
                {project.name}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                  {truncateDescription(project.description)}
                </p>
                <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <FaCalendarAlt className="mr-2" />
                  <span>{project.date}</span>
                </div>
                <div className="flex items-center mb-4">
                  <StarRating initialRating={project.rating || 3} />
                  
                </div>
                <div className="flex justify-center gap-4">
                  <Link
                    to={`/projects/${project.id}`}
                    className="bg-purple-600 text-white text-sm px-5 py-1  hover:bg-purple-700 transition-colors hover:bg-[black] border-2 border-black"
                  >
                    Details
                  </Link>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-2 border-black dark:bg-purple-400 dark:text-black dark:hover:bg-black dark:hover:text-white  text-purple-600 text-sm px-5 py-1  hover:bg-black hover:text-white transition-colors"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectList;
