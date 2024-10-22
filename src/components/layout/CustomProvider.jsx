import React from 'react';

const CustomProvider = ({ children }) => {
  return <main className='w-full max-w-7xl mx-auto px-4'>{children}</main>;
};

export default CustomProvider;
