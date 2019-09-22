import React from 'react';
import Header from './Header';
import Contact from './Contact';

const Home = () => {
  return (
    <>
      <Header title="Welcome To My Portfolio Website" button="Find Out More" />{' '}
      <Contact />
    </>
  );
};

export default Home;
