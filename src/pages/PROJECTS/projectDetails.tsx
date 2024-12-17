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
import { FaArrowLeft, FaCalendar, FaEnvelope, FaGithub, FaInstagram, FaLink, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';

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

  // Change the large display image based on thumbnail click
  const handleThumbnailClick = (index: number) => {
    setCurrentImageIndex(index);
  };

  return (
    <>
      <Header />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-thin mb-6 text-center dark:text-purple-600 dark:text-lime-300">{project.name}</h1>
        
        {/* Image Thumbnails */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {project.images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer transition-transform transform hover:scale-105"
              onClick={() => handleThumbnailClick(index)}
            >
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="w-full h-24 object-cover rounded-md shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Large Display Image */}
        <div className="relative flex justify-center items-center mb-6">
          <img
            src={project.images[currentImageIndex]}
            alt={`Project Image`}
            className="w-full h-auto max-w-3xl rounded-md"
          />
        </div>

        <p className="text-sm text-gray-700 dark:text-purple-300 mb-6 text-center">{truncateDescription(project.description)}</p>

        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-purple-600 block text-center text-white px-5 py-2 m-5  hover:bg-purple-700 transition-all duration-300"
        >
        <div className='flex justify-center gap-2'><FaLink/>
         <span>View Full Project</span> 
          </div> 
        </a>

        <div className='flex mt-5 justify-center gap-2  '>
          <span>
          <FaCalendar/></span><p className="text-sm text-gray-500 dark:text-gray-400  text-center">Date: {project.date}</p>
          </div>

        <div className="mt-6 text-center">
          <StarRating initialRating={4} />
        </div>
<br />
<hr />
<br /> 
<div className='container'>

  <h1 className='text-center text-2xl m-4 dark:text-purple-500'>About Developer</h1>

  <p className='text-center  text-sm  dark:text-purple-200 mb-5'>Hello, I'm <span className='text-red-200 font-bold'> Damilola Vincent</span>, a passionate web developer and the creator behind <span className='text-red-200 font-bold'>Pawacode</span>. With a deep interest in building dynamic and user-friendly websites, I specialize in developing innovative and responsive web applications. At Pawacode, I aim to deliver high-quality, tailored solutions to meet the needs of my clients while keeping up with the latest trends in web development.
</p>

<hr />
 <br /> <br />
<p className='text-sm text-center '> Feel free to connect with me through my social media platforms
</p>

 <div className="text-center mt-8 mb-8">
          
          <div className="flex justify-center space-x-6">
            <a
              href="mailto:whakhydoh@gmail.com"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-600 transition"
              title="Email"
            >
              <FaEnvelope size={30} />
            </a>
            <a
              href="https://wa.me/+2348053208997"
              className="text-green-600 dark:text-green-400 hover:text-green-800 dark:hover:text-green-600 transition"
              title="WhatsApp"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/damilola-ogunbanwo-1347b5284/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 dark:text-blue-500 hover:text-blue-900 dark:hover:text-blue-700 transition"
              title="LinkedIn"
            >
              <FaLinkedin size={30} />
            </a>
            <a
              href="https://instagram.com/its.damilola"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-600 dark:text-pink-400 hover:text-pink-800 dark:hover:text-pink-600 transition"
              title="Instagram"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://twitter.com/vicesensei"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-blue-300 hover:text-blue-700 dark:hover:text-blue-500 transition"
              title="Twitter"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://github.com/pawacodedatabase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition"
              title="GitHub"
            >
              <FaGithub size={30} />
            </a>
          </div>
        </div>
<hr />
<br />
        {/* Newsletter Section */}
        <div className="text-center md:text-right">
          <h2 className="text-xl font-semibold mb-4">Stay Connected</h2>
          <p className="text-sm mb-4">
            Subscribe to get updates about new projects and opportunities.
          </p>
          <form className="flex flex-col sm:flex-row justify-center md:justify-end">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 rounded-l border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
            />
            <button
              type="submit"
              className="p-2 bg-purple-600 text-white rounded-r hover:bg-purple-500 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
    



</div>




        {/* Comment Section */}
        <div className="mt-8">

        <hr /> <hr />
          <h3 className="text-xl text-center font-bold dark:text-purple-600  mb-4 p-3">Leave a Comment</h3>
          
          
          <h3 className="text-xl text-center font-thin dark:text-purple-600  mb-4 p-3">Select Avatar</h3>

          {/* Avatar Slider */}
          <div className="relative mb-6">
            <button
              onClick={handlePrevAvatar}
              className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black text-white p-4 z-10 rounded-full"
            >
             <FaArrowLeft/>
            </button>

            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300"
                style={{
                  transform: `translateX(-${avatarIndex * 100}%)`,
                }}
              >
                {avatars.map((avatar, index) => (
                  <div
                    key={index}
                    className={`flex-none w-32 h-32 mr-4 cursor-pointer ${selectedAvatar === avatar ? 'opacity-90 ' : ''}`}
                    onClick={() => handleAvatarSelection(avatar)}
                  >
                    <img
                      src={avatar}
                      alt={`Avatar ${index + 1}`}
                      className="w-[80px] h-[80px] object-cover rounded-full"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNextAvatar}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black text-white p-4 z-10 rounded-full"
            >
              <FaArrowRight/>
            </button>
          </div>

          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Name"
            className="w-full p-4 outline-none border-gray-300 border-b  dark:bg-black dark:text-white mb-4"
          />

          <textarea
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
            className="w-full h-32 p-4 border rounded-lg shadow-md dark:bg-black dark:text-white mb-4"
          />

          <button
            onClick={handleSubmitComment}
            className="mt-4 bg-purple-600 text-white px-6 py-2  hover:bg-purple-700 transition-all duration-300"
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
