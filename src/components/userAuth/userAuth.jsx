import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import './userAuth.css'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail
} from "firebase/auth";
import { ref, set, get } from "firebase/database";
import { auth, realtimeDb } from "../../firebase/firebase"; 
import { useDispatch } from "react-redux";
import { add } from "../../context/roleSlice";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const UserAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const [resetEmail, setResetEmail] = useState("");
  const [loginPage, setLoginPage] = useState('login')

  const handleForgotPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, resetEmail);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      toast.error(error.message);
    }
  };
  

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

         toast.success("Registration successful");
          navigate("/");
        })
        .catch((error) => {
          toast.error("Error registering user:", error);
          toast.error("Registration failed. Try again.");
        });
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user =  userCredential.user
          const uid =  user.uid
          getUserData(uid)
          toast.success("Login successful");
          
        })
        .catch((error) => {
          console.error("Error logging in user:", error);
          toast.error("Login failed. Check your credentials.");
        });
    }
  };

  function getUserData(userId) {
    const userRef = ref(realtimeDb, 'users/' + userId);
  
    
    get(userRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
          
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
      <div className="topContainer container h-100 d-flex flex-column justify-content-center align-items-center">
        <h2 className="text-center dark-text my-4"> Welcome to KrishiSahayak</h2>
     { loginPage === "login" ? <form onSubmit={handleAuth} className="loginForm p-4">
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
    </form> :
    <form action="" className="loginForm p-4">
      <h4 className=" text-color mb-4 text-center">
                Don't worry reset your password 
              </h4>
              <input
         type="email"
         placeholder="Enter your email"
         value={resetEmail}
         onChange={(e) => setResetEmail(e.target.value)}
         className='form-control px-4 rounded-full mb-8 loginInput'
       />
         <p className="text-center">
                {" "}
                <button
                  className="btn px-5 py-2 mt-3 btn-primary d-inline-block"
                  onClick={handleForgotPassword} 
                >
                  Reset Password
                </button>
              </p>
              </form>
}
            
            
    <p className="text-primary text-center" type="button" onClick={()=>{ loginPage === "login" ? setLoginPage("forgot") : setLoginPage("login")}}> {loginPage === "login" ? " Forgot Password ?" : "Login"}</p>
      </div>
    </div>
  );
};

export default UserAuth;
