import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { AdminLogin } from "./components/AdminLogin";
// import { UserAuth } from "./components/UserAuth";
// import { AdminDashboard } from "./components/AdminDashboard";
// import { UserDashboard } from "./components/UserDashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from "./components/homepage/homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/login" element={<UserAuth />} /> */}
        <Route path="/" element={<Homepage />} />
        {/* <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
        <Route path="/user-dashboard" element={<UserDashboard />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
