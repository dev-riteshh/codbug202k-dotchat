import { useState } from "react";
import { auth } from "./config/firebase";

import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth,email, password,displayName);
      navigate('/app/chat')
    } catch (error) {
      setError(error.message);
      setTimeout(()=>{
        setError(null)
      },2000)
    }
    setLoading(false);
    
  };

  return (
    <>
      <div className="flex h-screen justify-center items-center">
        <form className="p-10 flex w-2/6 rounded-lg flex-col bg-slate-800" onSubmit={handleSubmit}>
          <h1 className="text-[1.5rem] text-center overflow-hidden ">Sign in New Account</h1>
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
          <label className="py-3">Display Name:</label>
          <input
            className="text-black p-2 outline-none"
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
          <button className="mt-5 bg-indigo-600 p-2" type="submit" disabled={loading}>
            Register
          </button>
          {loading && <div>Loading...</div>}
        </form>
      </div>
    </>
  );
};

export default Register;
