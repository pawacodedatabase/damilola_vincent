import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for React Router v6
import { projects } from './projects'; // Assuming projects is an array of all your projects

// Function to get two random projects
const getRandomProjects = (projects: any[]) => {
  const shuffledProjects = [...projects].sort(() => Math.random() - 0.5); // Shuffle the projects
  return shuffledProjects.slice(0, 2); // Select the first 2 after shuffle
};

// Helper function to truncate the description to 30 words
const truncateDescription = (description: string, wordLimit: number = 30) => {
  const words = description.split(' ');
  if (words.length > wordLimit) {
    return words.slice(0, wordLimit).join(' ') + '...'; // Add ellipsis if it's truncated
  }
  return description; // Return the full description if it's within the limit
};

const RandomProject: React.FC = () => {
  const navigate = useNavigate(); // Use useNavigate hook for navigation in React Router v6
  const randomProjects = getRandomProjects(projects);

  // Handle navigation to all projects
  const handleViewAllProjects = () => {
    navigate('/projects'); // Navigate to the all projects page
  };

  // Handle navigation to a specific project
  const handleViewThisProject = (id: string) => {
    navigate(`/projects/${id}`); // Navigate to the specific project details page
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-semibold text-center text-purple-500 dark:text-[#fff] mb-10">
        Featured Projects <button onClick={handleViewAllProjects}></button>
      </h1>

      {/* Random Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {randomProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            handleViewThisProject={handleViewThisProject}
          />
        ))}
      </div>
    </div>
  );
};

interface ProjectCardProps {
  project: any;
  handleViewThisProject: (id: string) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  handleViewThisProject,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likes, setLikes] = useState(0);

  // Automatic image carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === project.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [project.images.length]);

  // Increment likes
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="w-full max-w-sm bg-white   rounded-lg shadow-lg dark:bg-[#2E1A47] dark:border-gray-700  m-auto">
      {/* Image Carousel */}
      <a href="#" onClick={() => handleViewThisProject(project.id)}>
        <div className="relative w-full h-60 overflow-hidden rounded-t-lg">
          <img
            className="w-full h-full object-cover transition-transform duration-500"
            src={project.images[currentImageIndex]} 
            alt={`Project ${project.name}`}
          />
        </div>
      </a>
      <div className="px-5 pb-5">
        {/* Title */}
        <a href="#" onClick={() => handleViewThisProject(project.id)}>
          <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mt-2">
            {project.name}
          </h5>
        </a>

        {/* Rating */}
        <div className="flex items-center mt-2.5 mb-5">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${
                i < project.rating ? 'text-yellow-300' : 'text-gray-200 dark:text-gray-600'
              }`}
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
          ))}
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">
            {project.rating || 'N/A'}
          </span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          {truncateDescription(project.description)} {/* Display truncated description */}
        </p>

        {/* Likes and View Button */}
        <div className="flex items-center justify-between">
          <button
            onClick={handleLike}
            className="text-gray-700 dark:text-gray-300 hover:text-blue-500 flex items-center space-x-2"
          >
            <svg
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span>{likes}</span>
          </button>
          <button
            onClick={() => handleViewThisProject(project.id)}
            className="text-white bg-purple-400 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center  dark:hover:bg-purple-700 dark:focus:ring-blue-800"
          >
            View Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomProject;
