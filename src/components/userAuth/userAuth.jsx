import React, { useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import  {auth, realtimeDb} from '../../firebase/firebase'

const UserAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);

  const handleAuth = (e) => {
    e.preventDefault();
    if (isRegistering) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          set(ref(realtimeDb, `users/${user.uid}`), {
            email: user.email,
            role: "user",
          });
          alert("User registered successfully");
        })
        .catch((error) => {
          console.error("Error registering user:", error);
          alert("Registration failed. Try again.");
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("User logged in successfully");
        window.location.href = "/user-dashboard";
      })
      .catch((error) => {
        console.error("Error logging in user:", error);
        alert("Login failed. Check your credentials.");
      });
  }
};

return (
  <form onSubmit={handleAuth}>
    <h2>{isRegistering ? "Register" : "Login"}</h2>
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
    <button type="submit">{isRegistering ? "Register" : "Login"}</button>
    <p onClick={() => setIsRegistering(!isRegistering)}>
      {isRegistering
        ? "Already have an account? Login"
        : "Don't have an account? Register"}
    </p>
  </form>
);
};

export default UserAuth;