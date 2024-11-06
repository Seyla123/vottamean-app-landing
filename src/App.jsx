import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence mode='wait'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='*' element={<HomePage />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
