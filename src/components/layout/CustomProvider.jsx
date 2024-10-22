import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

const CustomProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <Navbar />
      <main className='w-full max-w-7xl mx-auto px-4'>{children}</main>
    </BrowserRouter>
  );
};

export default CustomProvider;
