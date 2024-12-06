import React, { useState } from 'react';
import { FaUserAlt, FaEnvelope, FaLock, FaUpload } from 'react-icons/fa';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp: React.FC = () => {
  const navigate = useNavigate(); // Hook for navigation
  const [formData, setFormData] = useState({
    fullname: '',
    username: '',
    email: '',
    password: '',
    gender: 'male',
    profile_picture: null as File | null, // Explicitly typing profile_picture as File | null
  });

  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData({ ...formData, profile_picture: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Prepare FormData for file upload
      const formDataToSend = new FormData();
      formDataToSend.append('fullname', formData.fullname);
      formDataToSend.append('username', formData.username);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('gender', formData.gender);
      if (formData.profile_picture) formDataToSend.append('profile_picture', formData.profile_picture);

      // Send data to PHP backend
      const response = await axios.post('http://localhost/Portfolio/back/auth/signup.php', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data', // Necessary for file uploads
        },
      });

      // Handle success
      setSuccessMessage(response.data); // Assuming your PHP backend sends a success message
      console.log('User created:', response.data);

      // Redirect to login page after successful sign-up
      navigate('/login');
    } catch (error) {
      // Handle error
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.response?.data || 'An error occurred during sign-up.');
      } else {
        setErrorMessage('An unknown error occurred');
      }
      console.error('Error during sign-up:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <div className="max-w-lg mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Sign Up</h2>

          {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
          {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

          <form onSubmit={handleSubmit}>
            {/* Full Name */}
            <div className="mb-4">
              <label htmlFor="fullname" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Full Name</label>
              <div className="flex items-center border-2 rounded-md p-2 mt-2">
                <FaUserAlt className="text-gray-600 dark:text-gray-400 mr-3" />
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  className="w-full bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none"
                  placeholder="John Doe"
                  required
                />
              </div>
            </div>

            {/* Username */}
            <div className="mb-4">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Username</label>
              <div className="flex items-center border-2 rounded-md p-2 mt-2">
                <FaUserAlt className="text-gray-600 dark:text-gray-400 mr-3" />
                <input
                  type="text"
                  name="username"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  className="w-full bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none"
                  placeholder="johndoe123"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <div className="flex items-center border-2 rounded-md p-2 mt-2">
                <FaEnvelope className="text-gray-600 dark:text-gray-400 mr-3" />
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none"
                  placeholder="email@example.com"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Password</label>
              <div className="flex items-center border-2 rounded-md p-2 mt-2">
                <FaLock className="text-gray-600 dark:text-gray-400 mr-3" />
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none"
                  placeholder="********"
                  required
                />
              </div>
            </div>

            {/* Gender */}
            <div className="mb-4">
              <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Gender</label>
              <select
                name="gender"
                id="gender"
                value={formData.gender}
                onChange={handleChange}
                className="w-full border-2 rounded-md p-2 mt-2 bg-transparent text-gray-900 dark:text-gray-100"
                required
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Profile Picture */}
            <div className="mb-4">
              <label htmlFor="profile_picture" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Profile Picture</label>
              <div className="flex items-center border-2 rounded-md p-2 mt-2">
                <FaUpload className="text-gray-600 dark:text-gray-400 mr-3" />
                <input
                  type="file"
                  name="profile_picture"
                  id="profile_picture"
                  onChange={handleFileChange}
                  className="w-full bg-transparent text-gray-900 dark:text-gray-100 focus:outline-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500 transition duration-300 ease-in-out"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
