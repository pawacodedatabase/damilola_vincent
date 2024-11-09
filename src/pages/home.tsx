import React from 'react';

import Header from './header';
import PageComponent from '../components/PageComponent';
import Hero from '../components/hero';
import RandomProject from './PROJECTS/randomProjects';




const Home: React.FC = () => {
  return (
    <>
  <Header/>
  <Hero />
  <PageComponent />  
  <RandomProject/>
    
    </>
  
  );
};

export default Home;
