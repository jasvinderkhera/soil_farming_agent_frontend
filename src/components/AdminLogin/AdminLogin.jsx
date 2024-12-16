import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/firebase";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user.email === "ankitkhera15@gmail.com") {
          alert("Admin logged in successfully");
          window.location.href = "/admin-dashboard";
        } else {
          alert("Access denied! Only admins can log in here.");
        }
      })
      .catch((error) => {
        console.error("Error logging in as admin:", error);
        alert("Login failed. Please check your credentials.");
      });
      e.target.value = ""
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Admin Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    );
  };
  
  export default AdminLogin;