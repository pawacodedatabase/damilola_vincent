
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; 
import google from '../../src/assets/images/googleplay.png'

const Footer = () => {
  return (
    <footer className=" border border-gray-mazx00 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-semibold mb-2 shadow-md p-5 px-10 text-red-400 text-center hover:bg-gray-100">Download Our App</h2>
            <div className="flex justify-center md:justify-start">
              <a
                href="#"
                className="mr-4"
                aria-label="Download on the App Store"
              >
                <img
                  src={google}
                
                  alt="Download on the App Store"
                  className="h-10"
                />
              </a>
              
            </div>
          </div>
          <div className="mt-6 md:mt-0">
            <h2 className="text-2xl font-semibold mb-2 shadow-md p-5 px-10 text-red-400 text-center mb-4 hover:bg-gray-100">Follow Us</h2>
            <div className="flex justify-center md:justify-end shadow-md p-5 px-10 hover:bg-gray-100">
              <a href="#" className="mx-2" aria-label="Facebook">
                
                <div  className="text-2xl hover:text-[#c30101]">
                 <FaFacebook /> </div>
              </a>
              <a href="#" className="mx-2" aria-label="Twitter">
                <div className='text-2xl hover:text-[#c30101]"'> <FaTwitter /></div>
              </a>
              <a href="#" className="mx-2" aria-label="Instagram">
                <div className='text-2xl hover:text-[#c30101]"'> <FaInstagram  /></div>
              </a>
              <a href="#" className="mx-2" aria-label="LinkedIn">
                <div className='text-2xl hover:text-[#c30101]"'> <FaLinkedin  /></div>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} TurboThrills. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
