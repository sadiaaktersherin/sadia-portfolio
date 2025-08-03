import React from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
  return (
    <section id="blog" className="py-20 bg-gray-100 max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Blog
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Read my latest articles and tutorials on web development and design.
      </motion.p>
    </section>
  );
}
