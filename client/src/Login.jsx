import { useState } from "react";
import { auth } from "./config/firebase";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()

  const [signInWithEmailAndPassword, user, signInLoading, signInError] =
    useSignInWithEmailAndPassword(auth);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(email, password);
      navigate('/app/chat')
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <form
          className="p-10 flex w-[30rem] rounded-lg flex-col bg-slate-800"
          onSubmit={handleSubmit}
        >
          {error && <div className="p-2 bg-red-500 rounded-md mt-4">{error}</div>}
          <label className="py-3">Email:</label>
          <input
            className="text-black outline-none p-2"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="py-3">Password:</label>
          <input
            className="text-black outline-none p-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
           className="mt-5 bg-indigo-600 p-2"
           type="submit" disabled={loading}>
            Login
          </button>
          {loading && <div>Loading...</div>}
        </form>
      </div>
    </>
  );
};

export default Login;
