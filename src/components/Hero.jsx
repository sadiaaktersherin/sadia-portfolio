import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="hero" className="h-screen flex flex-col justify-center items-center bg-gradient-to-b from-purple-500 to-purple-300 text-white">
      <motion.h2 
        className="text-5xl font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to My Portfolio
      </motion.h2>
      <motion.p 
        className="mt-4 text-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        I'm a React Developer creating modern web apps
      </motion.p>
    </section>
  );
}
