import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20 max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        About Me
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        I am a passionate web developer skilled in React and modern JavaScript frameworks.
      </motion.p>
    </section>
  );
}
