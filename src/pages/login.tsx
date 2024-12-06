import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import axios from 'axios';
import Header from './header';

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost/Portfolio/back/auth/login.php', formData);

      if (response.data.status === 'success') {
        setSuccessMessage(response.data.message);
        setErrorMessage(null);

        // Save the user details in localStorage to maintain session
        localStorage.setItem('user', JSON.stringify(response.data.data)); // Save to localStorage

        // Redirect to dashboard with user details
        navigate('/contact', { state: response.data.data });
      } else {
        setSuccessMessage(null);
        setErrorMessage(response.data.message);
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        setErrorMessage('An error occurred during login. Please try again.');
      } else {
        setErrorMessage('An unexpected error occurred.');
      }
    }
  };

  return (
    <>
    <Header/>
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 font-sans">
      <div className="max-w-lg mx-auto p-6">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl">
          <h2 className="text-3xl font-bold text-center mb-8 text-blue-600 dark:text-blue-400">Login</h2>

          {errorMessage && <div className="text-red-500 text-center mb-4">{errorMessage}</div>}
          {successMessage && <div className="text-green-500 text-center mb-4">{successMessage}</div>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <div className="flex items-center border-2 rounded-md p-2 mt-2">
                <FaUserAlt className="text-gray-600 dark:text-gray-400 mr-3" />
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

            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-500 transition duration-300 ease-in-out"
              >
                Log In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
