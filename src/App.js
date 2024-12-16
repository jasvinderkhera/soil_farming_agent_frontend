import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { UserAuth } from "./components/UserAuth";
// import { AdminDashboard } from "./components/AdminDashboard";
// import { UserDashboard } from "./components/UserDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./components/homepage/homepage";
import AdminLogin from "./components/AdminLogin/AdminLogin";
import Login from "./components/login/login";
import AdminDashboard from "./components/adminDashboard/adminDashboard";
import UserDashboard from "./components/userDashboard/userDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<UserAuth />} /> */}
        <Route path="/" element={<Homepage />} />
         <Route path="/admin-login" element={<AdminLogin />} />
         <Route path="/login" element={<Login />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
