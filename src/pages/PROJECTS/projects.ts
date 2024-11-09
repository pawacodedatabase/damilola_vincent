// Define the structure of a project
export interface Project {
  id: string;
  name: string;
  images: string[];  // Array of image URLs or file paths
  date: string;  // Date the project was created or started
  description: string;
  link: string;  
}

import tomato_1 from '../PROJECTS/Tomato/tomato_1.jpg';
import tomato_2 from '../PROJECTS/Tomato/tomato_2.jpg';
import tomato_3 from '../PROJECTS/Tomato/tomato_3.jpg';
import tomato_4 from '../PROJECTS/Tomato/tomato_1.jpg';
import tomato_5 from '../PROJECTS/Tomato/tomato_2.jpg';
import tomato_6 from '../PROJECTS/Tomato/tomato_3.jpg';



import  fuud_1 from '../PROJECTS/Tomato/fuud_1.png';
import fuud_2  from '../PROJECTS/Tomato/fuud_2.png';
import  fuud_3 from '../PROJECTS/Tomato/fuud_3.png';
import  fuud_4 from '../PROJECTS/Tomato/fuud_4.png';
import fuud_5  from '../PROJECTS/Tomato/fuud_5.png';



// Example projects data
export const projects: Project[] = [
  {
    id: '1',
    name: "Tomato Food Page",
    images: [tomato_1, tomato_2, tomato_3 , tomato_4, tomato_5  , tomato_6],
    date: "2024-10-01",
    description: "Tomato is a modern web app built with React, TailwindCSS, and TypeScript that allows users to explore recipes, create meal plans, track nutritional intake, and share their favorite dishes. The app includes an Add to Cart feature for users to select ingredients or products and easily purchase them. With a smooth and responsive design, users can enjoy a seamless experience across devices while managing their culinary needs and meal planning.",
    link: "https://tomato-psi.vercel.app/",
  },
  {
    id: '2',
    name: "Fuud Upgrade",
    images: [fuud_1,fuud_2,fuud_3,fuud_4,fuud_5],
    date: "2024-10-15",
    description: "is a modern web app built with React, TailwindCSS, and TypeScript that allows users to explore recipes, create meal plans, track nutritional intake, and share their favorite dishes. The app includes an Add to Cart feature for users to select ingredients or products and easily purchase them. With a smooth and responsive design, users can enjoy a seamless experience across devices while managing their culinary needs and meal planning.",
    link: "https://fuud2-l7qe-git-main-pawacodedatabases-projects.vercel.app/",
  },
  {
    id: '3',
    name: "Project Three",
    images: ["image5.jpg", "image6.jpg"],
    date: "2024-11-01",
    description: "This is the description for the third project.",
    link: "https://www.example.com/project-three",
  },
];
