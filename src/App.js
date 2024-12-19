// import React, { useState, useEffect, } from "react";
// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import UserAuth from "./components/userAuth/userAuth";
// import "bootstrap/dist/css/bootstrap.min.css";
// import Homepage from "./components/homepage/homepage";
// import AdminDashboard from "./components/adminDashboard/adminDashboard";
// import UserDashboard from "./components/userDashboard/userDashboard";
// import { auth, realtimeDb } from "./firebase/firebase";
// import { ref, get } from "firebase/database";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { useSelector } from 'react-redux'

// function App() {
//   const [user] = useAuthState(auth);
//   const [role, setRole] = useState(null);
//   const [loading, setLoading] = useState(true);
// const todo = useSelector((state)=>state.role.value)
// console.log("Role is:", todo)


//   return (
   
//     <BrowserRouter>
//     <Routes>
//       {/* < Route path="/" element={user && (role === "admin") ?<Navigate to="/admin-dashboard"/> :  <Homepage /> } />
//       < Route path="/" element={user && (role === "user") ?<Navigate to="/user-dashboard"/> :  <Homepage /> } />
//       <Route path="/login" element={user && (role === "admin") ? <Navigate to="/admin-dashboard"/> : <UserAuth />} />
//       <Route path="/login" element={user && (role === "user") ? <Navigate to="/user-dashboard"/> : <UserAuth />} /> */}

// < Route path="/" element={user && (role === "admin") ? <AdminDashboard/> :  <Homepage /> } />
//       < Route path="/" element={user && (role === "user") ?<UserDashboard /> :  <Homepage /> } />
//       <Route path="/login" element={user && (role === "admin") ? <AdminDashboard/> : <UserAuth />} />
//       <Route path="/login" element={user && (role === "user") ? <UserDashboard/> : <UserAuth />} />
//       <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
//       <Route path="/user-dashboard" element={<UserDashboard/>}/>
//       <Route path="*" element={user && (role === "user") ? "/user-dashboard" : "/"} />
//       <Route path="*" element={user && (role === "admin") ? "/admin-dashboard" : "/"} />
//     </Routes>
//     </BrowserRouter>
//   );
// }


// function PrivateRoute({ user, children }) {
//   return user ? children : <Navigate to="/" />;
// }






// export default App;





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

function App() {
  const [user] = useAuthState(auth);
  const role = useSelector((state) => state.role.value);

  return (
    <BrowserRouter>
      <Routes>
        {/* Public Route */}
        <Route
          path="/"
          element={!user ? <Homepage /> : <Navigate to={role === "admin" ? "/admin-dashboard" : "/user-dashboard"} />}
        />

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
    </BrowserRouter>
  );
}

export default App;
