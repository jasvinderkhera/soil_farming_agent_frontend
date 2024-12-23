import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import UserAuth from "./components/userAuth/userAuth";
import "bootstrap/dist/css/bootstrap.min.css";
import Homepage from "./components/homepage/homepage";
import AdminDashboard from "./components/adminDashboard/adminDashboard";
import UserDashboard from "./components/userDashboard/userDashboard";
import { useAuthState } from "react-firebase-hooks/auth";
import { useSelector } from "react-redux";
import { auth } from "./firebase/firebase";
import ActRules from "./components/actRules/actRules";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Crops from "./components/crops/crops";
import About from "./components/about/About";
import Notice from "./components/notice/notice";
import Features from "./components/features/features";
import { ToastContainer } from 'react-toastify'

function App() {
  const [user] = useAuthState(auth);
  const role = useSelector((state) => state.role.value);

  return (
    <BrowserRouter>
     <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
    <Header/>
   
      <Routes>
        {/* Public Route */}
        <Route
          path="/"
          element={!user ? <Homepage /> : <Navigate to={role === "admin" ? "/admin-dashboard" : "/user-dashboard"} />}
        />
        <Route path="/notice" element={<Notice/>} />
        <Route path="/act-rules" element={<ActRules/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/crop" element={<Crops/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/features" element={<Features/>} />

        {/* Auth Route - Inaccessible after login */}
        <Route
          path="/login"
          element={!user ? <UserAuth /> : <Navigate to={role === "admin" ? "/admin-dashboard" : "/user-dashboard"} />}
        />

        {/* Admin Private Route */}
        <Route
          path="/admin-dashboard"
          element={user && role === "admin" ? <AdminDashboard /> : <Navigate to="/" />}
        />

        {/* User Private Route */}
        <Route
          path="/user-dashboard"
          element={user && role === "user" ? <UserDashboard /> : <Navigate to="/" />}
        />

        {/* Catch-All Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
