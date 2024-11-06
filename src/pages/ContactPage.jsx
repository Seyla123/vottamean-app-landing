import React, { useEffect, useState } from 'react';
import ContactSection from '@/components/section/ContactSection';
import { motion } from 'framer-motion';

export default function ContactPage() {
  const [showSnackbar, setShowSnackbar] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {showSnackbar && (
        <div className='fixed flex top-20 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-green-500 text-white rounded-lg shadow-lg z-[10000]'>
          Your message has been sent successfully! Our support team will reach
          out to you shortly.
        </div>
      )}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <ContactSection setShowSnackbar={setShowSnackbar} />
      </motion.div>
    </>
  );
}
