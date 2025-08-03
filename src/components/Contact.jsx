import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact({ setShowModal, isSignedIn }) {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    if (!isSignedIn) {
      setShowModal(true);
      return;
    }
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, import.meta.env.VITE_PUBLIC_KEY)
      .then(() => {
        setStatus("Message sent!");
        form.current.reset();
      }, (error) => {
        console.error(error);
        setStatus("Error sending message.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-gray-100 max-w-6xl mx-auto px-4">
      <motion.h2 
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Me
      </motion.h2>
      <motion.form 
        ref={form} 
        onSubmit={sendEmail} 
        className="flex flex-col space-y-4 max-w-md"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <input type="text" name="user_name" placeholder="Your Name" className="border p-2" required />
        <input type="email" name="user_email" placeholder="Your Email" className="border p-2" required />
        <textarea name="message" placeholder="Your Message" className="border p-2" required></textarea>
        <button type="submit" className="bg-purple-600 text-white py-2">Send Message</button>
        {status && <p>{status}</p>}
      </motion.form>
    </section>
  );
}
