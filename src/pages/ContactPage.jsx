import React, { useEffect } from 'react';
import ContactSection from '@/components/section/ContactSection';
import { motion } from 'framer-motion';

export default function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <ContactSection />
    </motion.div>
  );
}
