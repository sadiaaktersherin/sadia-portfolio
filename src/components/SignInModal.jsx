import React, { useState } from 'react';

export default function SignInModal({ setShowModal, setIsSignedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsSignedIn(true);
      setShowModal(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-4">Sign In</h2>
        <form onSubmit={handleSignIn} className="flex flex-col space-y-4">
          <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} className="border p-2" required />
          <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="border p-2" required />
          <button type="submit" className="bg-purple-600 text-white py-2">Sign In</button>
        </form>
        <button onClick={() => setShowModal(false)} className="mt-4 text-gray-500">Cancel</button>
      </div>
    </div>
  );
}
