import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../firebase";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, { displayName: username })
        )
      )
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div className="flex flex-col border border-gray-500 p-[50px] ml-[30px] mr-[30px]">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1600px-Instagram_logo.svg.png"
        alt=""
        className="w-[200px] ml-auto mr-auto mb-[40px]"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder="Email"
        className="bg-[#ffffff24] border border-gray-500 rounded-[3px] p-[12px] mb-[20px] focus:outline outline-1 outline-gray-500"
        value={email}
      />
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        placeholder="Username"
        className="bg-[#ffffff24] border border-gray-500 rounded-[3px] p-[12px] mb-[20px] focus:outline outline-1 outline-gray-500"
        value={username}
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder="Password"
        className="bg-[#ffffff24] border border-gray-500 rounded-[3px] p-[12px] mb-[20px] focus:outline outline-1 outline-gray-500"
        value={password}
      />
      <button
        onClick={handleSignup}
        className="p-[12px] rounded-lg border-0 text-white bg-[#0095f6] font-semibold hover:cursor-pointer"
      >
        Sign Up
      </button>
    </div>
  );
}

export default Signup;
