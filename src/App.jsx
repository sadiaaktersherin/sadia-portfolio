import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SignInModal from './components/SignInModal';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <div className="font-sans bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Blog />
      <Testimonials />
      <Contact setShowModal={setShowModal} isSignedIn={isSignedIn} />
      <Footer />
      {showModal && <SignInModal setShowModal={setShowModal} setIsSignedIn={setIsSignedIn} />}
    </div>
  );
}
