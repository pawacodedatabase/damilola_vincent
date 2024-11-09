import { useState } from 'react';
import { AiOutlineMail, AiOutlinePhone, AiOutlineMessage } from 'react-icons/ai';


const ContactForm = () => {
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [message, setMessage] = useState('');
  const [stayLoggedIn, setStayLoggedIn] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {  // TypeScript: specify React.FormEvent type
    e.preventDefault();
    console.log({ email, number, message, stayLoggedIn });
  };

  return (
    <>
  
    <div className="max-w-md mx-auto bg-white dark:bg-black shadow-lg rounded-lg p-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300">Contact Me</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 m-3 dark:text-gray-300">E-Mail Address</label>
          <div className="relative">
            <AiOutlineMail className="absolute left-3 top-3 text-gray-400" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="number" className="block text-sm font-medium text-gray-700 m-3 dark:text-gray-300">Phone Number</label>
          <div className="relative">
            <AiOutlinePhone className="absolute left-3 top-3 text-gray-400" />
            <input
              type="number"
              id="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 m-3 dark:text-gray-300">Message</label>
          <div className="relative">
            <AiOutlineMessage className="absolute left-3 top-3 text-gray-400" />
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your message"
              rows={4}
            />
          </div>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            id="stayLoggedIn"
            checked={stayLoggedIn}
            onChange={() => setStayLoggedIn(!stayLoggedIn)}
            className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500"
          />
          <label htmlFor="stayLoggedIn" className="ml-2 text-sm text-gray-600 dark:text-gray-300">Stay logged in</label>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>  </>
  );
};

export default ContactForm;
