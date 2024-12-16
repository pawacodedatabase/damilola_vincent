import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/img/2ban.jpeg"; // Image 1
import img2 from "../assets/img/banner1.jpeg"; // Image 2
import img3 from "../assets/img/pexels-photo-10725897.jpeg"; // Image 3
const images = [img1, img2, img3]; // Array of images

const Hero: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Clean up interval
  }, []);

  // Define the button content and links based on the current image index
  const buttonContent = [
    {
      title: "View Projects",
      link: "/projects",
    },
    {
      title: "Get In Touch",
      link: "/contact",
    },
    {
      title: "Learn More",
      link: "/about",
    },
  ];

  const textContent = [
    {
      heading: user ? `Welcome, ${user.username}!` : "Hi, Guest!",
      subheading: "I’m Damilola Vincent, a creative web developer crafting modern and elegant solutions.",
    },
    {
      heading: "Explore My Work",
      subheading: "I create beautiful, functional websites that empower businesses and individuals.",
    },
    {
      heading: "Innovative Solutions Await",
      subheading: "Bringing your ideas to life with cutting-edge technology and design.",
    },
  ];

  return (
    <section
      className="relative w-full h-[80vh] bg-cover bg-center bg-fixed text-center transition-all duration-1000 ease-in-out"
      style={{
        backgroundImage: `url(${images[currentImageIndex]})`,
      }}
    >
      {/* Gradient Overlay for Better Text Visibility */}
      <div className="absolute inset-0 bg-white dark:bg-black opacity-70"></div>

      {/* Content Container (Centered vertically and horizontally) */}
      <div className="relative flex items-center justify-center flex-col text-center text-white space-y-6 px-6 max-w-4xl mx-auto h-full">
        {/* Main Title */}
        <h1 className="text-3xl font-semibold tracking-tight text-black dark:text-purple-500 md:text-5xl lg:text-6xl animate__animated animate__fadeIn animate__delay-1s">
          {textContent[currentImageIndex].heading}
        </h1>

        {/* Subtitle */}
        <h2 className="text-sm  font-light leading-relaxed text-black dark:text-gray-200 md:text-xl lg:text-2xl animate__animated animate__fadeIn animate__delay-2s">
          {textContent[currentImageIndex].subheading}
        </h2>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <Link to={buttonContent[0].link}>
            <button className="px-6 py-3 border-2 bg-purple-500 text-white hover:bg-white hover:text-black transition">
              {buttonContent[0].title}
            </button>
          </Link>
          <Link to={buttonContent[1].link}>
            <button className="px-6 py-3 border-2 bg-black text-white hover:bg-white hover:text-black transition">
              {buttonContent[1].title}
            </button>
          </Link>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-10 hidden md:block w-16 h-16 bg-[#ff7b7b] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute top-10 right-10 hidden md:block w-24 h-24 bg-[#ffbaba] rounded-full opacity-10"></div>

      {/* Bottom Border with Opacity */}
     
    </section>
  );
};

export default Hero;
