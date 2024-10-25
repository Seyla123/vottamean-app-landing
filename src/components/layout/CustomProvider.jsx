import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
import { ReactLenis, useLenis } from '@studio-freight/react-lenis';
import { Provider } from 'react-redux';
import store from '@/store/store';
import Footer from './Footer';

const CustomProvider = ({ children }) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ReactLenis root>
          <Navbar />
          <main className='w-full '>{children}</main>
          <Footer />
        </ReactLenis>
      </Provider>
    </BrowserRouter>
  );
};

export default CustomProvider;
