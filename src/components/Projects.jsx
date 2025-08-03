import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Here are some of my featured projects showcasing my skills.
      </motion.p>
    </section>
  );
}
