import React from 'react';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-100 max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        Services
      </motion.h2>
      <motion.ul 
        className="list-disc list-inside"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <li>Web Development</li>
        <li>UI/UX Design</li>
        <li>React Consulting</li>
      </motion.ul>
    </section>
  );
}
