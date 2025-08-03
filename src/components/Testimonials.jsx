import React from 'react';
import { motion } from 'framer-motion';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        Testimonials
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        What clients say about my work.
      </motion.p>
    </section>
  );
}
