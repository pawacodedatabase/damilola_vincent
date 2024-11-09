import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { projects } from './projects';
import Header from '../header';
import StarRating from './StarRating';

import av1 from '../../assets/img/1.jpg';
import av2 from '../../assets/img/2.jpg';
import av3 from '../../assets/img/3.jpg';
import av4 from '../../assets/img/4.jpg';
import av5 from '../../assets/img/5359af2ff56b783dc1b06699fcc0983a.jpg';
import av6 from '../../assets/img/a8381ed241fe8fbb6d90e483a214c30a.jpg';

// List of cartoon character avatars for users to pick from
const avatars = [
  av1, av2, av3, av4, av5, av6
];

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract the project id from the URL
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [comment, setComment] = useState<string>('');
  const [name, setName] = useState<string>('');  // Added name state
  const [selectedAvatar, setSelectedAvatar] = useState<string>('');
  const [comments, setComments] = useState<{ name: string; comment: string; avatar: string }[]>([]);

  const [avatarIndex, setAvatarIndex] = useState(0); // Track the current slide of avatars

  // Find the project by id
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <p>Project not found.</p>;
  }

  // Handle next and previous image for the slider
  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % project.images.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + project.images.length) % project.images.length);
  };

  // Handle comment input
  const handleCommentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(event.target.value);
  };

  // Handle name input
  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  // Handle avatar selection
  const handleAvatarSelection = (avatar: string) => {
    setSelectedAvatar(avatar);
  };

  // Handle comment submission
  const handleSubmitComment = () => {
    if (comment.trim() && selectedAvatar && name.trim()) {
      const newComment = {
        name: name.trim(),
        comment: comment.trim(),
        avatar: selectedAvatar,
      };
      setComments((prevComments) => [...prevComments, newComment]);
      setComment('');
      setName('');
      setSelectedAvatar('');
    } else {
      alert('Please write a comment, select an avatar, and provide your name.');
    }
  };

  // Helper function to truncate description if needed
  const truncateDescription = (description: string) => {
    return description.split(' ').slice(0, 30).join(' ') + '...';
  };

  // Handle next and previous for avatar slider
  const handleNextAvatar = () => {
    setAvatarIndex((prevIndex) => (prevIndex + 1) % Math.ceil(avatars.length / 4));
  };

  const handlePrevAvatar = () => {
    setAvatarIndex((prevIndex) => (prevIndex - 1 + Math.ceil(avatars.length / 4)) % Math.ceil(avatars.length / 4));
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-600 dark:text-lime-300">{project.name}</h1>
        
        {/* Fullscreen Image Slider */}
        <div className="relative mt-8">
          <div className="flex justify-center items-center">
            <img
              src={project.images[currentImageIndex]}
              alt={`Project Image ${currentImageIndex + 1}`}
              className="w-full h-[90vh] object-cover rounded-md shadow-lg"
            />
          </div>

          {/* Slider Navigation */}
          <button
            onClick={handlePrevImage}
            className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
          >
            &#8592;
          </button>
          <button
            onClick={handleNextImage}
            className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 p-3 rounded-full"
          >
            &#8594;
          </button>
        </div>
<br /><br />
<p className="text-lg text-gray-700 dark:text-gray-300 mb-6 text-center">{truncateDescription(project.description)}</p>

          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 block text-center text-white p-6 m-5 rounded-md hover:bg-blue-700 transition-all duration-300"
          >
            View Full Project
          </a>
      

     <br /> <br />   

        {/* Project Date */}
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 text-center">Date Created: {project.date}</p>

        {/* Star Rating */}
        <div className="mt-6 text-center">
          <StarRating initialRating={4} /> {/* You can modify this to be dynamic based on the project */}
        </div>


         {/* External Link */}
       



        {/* Comment Section */}
        <div className="mt-8">
          <h3 className="text-2xl  text-center font-bold text-indigo-600 dark:text-lime-300 mb-4 border border-grey-300 p-3">Leave a Comment</h3>
          <h3 className="text-xl text-center  font-semibold text-indigo-600 dark:text-lime-300 mb-4 ">Select Avatar</h3>

          {/* Avatar Slider */}
          <div className="relative mb-6">
            <button
              onClick={handlePrevAvatar}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
              &#8592;
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{
                  transform: `translateX(-${avatarIndex * 100}%)`, // Move the slider by 100% width of each 4 images
                }}
              >
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={`flex-none w-32 h-32 mr-4 cursor-pointer ${selectedAvatar === avatar ? 'border-4 border-indigo-600' : ''}`}
                    onClick={() => handleAvatarSelection(avatar)}
                  >
                    <img
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      className="w-[100px] h-[100px] object-cover rounded-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNextAvatar}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-2 rounded-full"
            >
              &#8594;
            </button>
          </div>

          {/* Name Input */}
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            className="w-full p-4 border rounded-lg shadow-md dark:bg-gray-800 dark:text-white mb-4"
          />

          {/* Comment Form */}
          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
            className="w-full h-32 p-4 border rounded-lg shadow-md dark:bg-gray-800 dark:text-white mb-4"
          />

          <button
            onClick={handleSubmitComment}
            className="mt-4 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
          >
            Submit Comment
          </button>
        </div>

        {/* Display Comments */}
        <div className="mt-8 space-y-4">
          {comments.map((comment, index) => (
            <div
              key={index}
              className="flex items-start p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg space-x-4"
            >
              <div className="mr-4">
                <img
                  src={comment.avatar}
                  alt="User Avatar"
                  className="w-16 h-16 rounded-full"
                />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">{comment.name}</p>
                <p className="text-gray-600 dark:text-gray-400 mt-1">{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>

       
      </div>
    </>
  );
};

export default ProjectDetail;
