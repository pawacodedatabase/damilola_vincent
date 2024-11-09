import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for React Router v6
import { projects } from './projects';  // Assuming projects is an array of all your projects

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
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold text-center text-indigo-600 dark:text-lime-300 mb-8">
        Check Out These Projects
      </h1>
      
      {/* Random Project Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {randomProjects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={project.images[0]} // Display the first image of the project
              alt={`Project Image`}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-xl font-bold text-gray-800 dark:text-gray-200 mb-2">{project.name}</h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {truncateDescription(project.description)} {/* Display truncated description */}
            </p>
            
            <div className="flex justify-between">
              {/* View This Project Button */}
              <button
                onClick={() => handleViewThisProject(project.id)}
                className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300"
              >
                View This Project
              </button>
              
              {/* View All Projects Button */}
              <button
                onClick={handleViewAllProjects}
                className="bg-black text-white text-sm px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300"
              >
                View All Projects
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RandomProject;
