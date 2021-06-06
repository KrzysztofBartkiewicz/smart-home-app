import React from 'react';
import Navbar from '../components/molecules/Navbar';

const NavigationTemplate = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default NavigationTemplate;
