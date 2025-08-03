import React from 'react';

export default function Header() {
  return (
    <header className="p-4 bg-purple-600 text-white sticky top-0 z-50">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex space-x-4">
          <li><a href="#hero" className="hover:underline">Home</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#services" className="hover:underline">Services</a></li>
          <li><a href="#projects" className="hover:underline">Projects</a></li>
          <li><a href="#blog" className="hover:underline">Blog</a></li>
          <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
          <li><a href="#contact" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
