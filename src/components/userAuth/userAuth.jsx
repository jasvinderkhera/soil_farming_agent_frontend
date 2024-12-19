import { Navigate, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import './userAuth.css'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { ref, set, get } from "firebase/database";
import { auth, realtimeDb } from "../../firebase/firebase"; 
import { useAuthState } from "react-firebase-hooks/auth";
import { useDispatch } from "react-redux";
import { add } from "../../context/roleSlice";
import Header from "../header/Header";
import Footer from "../footer/Footer";


const UserAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate(); // React Router navigation
  

  const handleAuth = (e) => {
    e.preventDefault();

    if (isRegistering) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;

          // Default role is "user" when registering
          set(ref(realtimeDb, `users/${user.uid}`), {
            email: user.email,
            role: "user", // Admin role will already be stored manually in the DB
          });

          alert("Registration successful");
          navigate("/"); // Go to home, App.js will redirect properly based on role
        })
        .catch((error) => {
          console.error("Error registering user:", error);
          alert("Registration failed. Try again.");
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user =  userCredential.user
          const uid =  user.uid
          getUserData(uid)
          alert("Login successful");
          // navigate("/"); // Go to home, App.js will handle role-based navigation
        })
        .catch((error) => {
          console.error("Error logging in user:", error);
          alert("Login failed. Check your credentials.");
        });
    }
  };

  function getUserData(userId) {
    const userRef = ref(realtimeDb, 'users/' + userId);  // Reference to the user data by userId
  
    // Get the data
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          // console.log('User data:', data);
          // console.log('User role:', data.role);
          dispatch(add(data.role))
          if(data.role === "admin"){
            navigate('/admin-dashboard')
          }else{
            navigate('/user-dashboard')
          }
        } else {
          console.log('No data available for this user');
        }
      })
      .catch((error) => {
        console.error('Error reading user data: ', error);
      });
  }

  return (
    <div>
      <Header/>
      <div className="topContainer container h-100 d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center dark-text my-4"> Welcome to KrishiSahayak</h2>
      <form onSubmit={handleAuth} className="loginForm p-4">
      <h2 className="text-center mb-3">{isRegistering ? "Register" : "Login"}</h2>
      <div className="mb-3">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="form-control"
      />
      </div>
     <div className="mb-3">
     <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="form-control"
      />
     </div>
      <p className="text-center"><button type="submit" className="btn btn-success mb-3 w-100">{isRegistering ? "Register" : "Login"}</button></p>
      <p onClick={() => setIsRegistering(!isRegistering)} className="loginToggle text-center">
        {isRegistering
          ? <p>Already have an account? <span className="text-primary">Login</span></p>
          : <p>Don't have an account? <span className="text-primary">Register</span></p>}
      </p>
    </form>
      </div>
      <Footer/>
    </div>
  );
};

export default UserAuth;
