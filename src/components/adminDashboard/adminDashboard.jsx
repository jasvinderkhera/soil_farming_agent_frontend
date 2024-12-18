import React, { useState } from "react";
import {ref, push, set } from "firebase/database";
import {auth, realtimeDb} from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const [schemeTitle, setSchemeTitle] = useState("");
  const [schemeDetails, setSchemeDetails] = useState("");
  const navigate = useNavigate(); 

  const postScheme = (e) => {
    e.preventDefault();
    const schemeRef = ref(realtimeDb, "schemes");
    const newSchemeRef = push(schemeRef);

    set(newSchemeRef, {
      title: schemeTitle,
      details: schemeDetails,
      status: "Pending",
    })
      .then(() => {
        alert("Scheme posted successfully");
        setSchemeTitle("");
        setSchemeDetails("");
      })
      .catch((error) => {
        console.error("Error posting scheme:", error);
        alert("Failed to post scheme. Try again.");
    });
};

const handleLogout = () => {
  auth.signOut();
  navigate('/')
};

return (
  <div>
  <form onSubmit={postScheme}>
    <h2>Post a New Scheme</h2>
    <input
      type="text"
      placeholder="Scheme Title"
      value={schemeTitle}
      onChange={(e) => setSchemeTitle(e.target.value)}
    />
    <textarea
      placeholder="Scheme Details"
      value={schemeDetails}
      onChange={(e) => setSchemeDetails(e.target.value)}
    />
    <button type="submit">Post Scheme</button>
  </form>

<div className="d-flex py-4 justify-content-center align-items-center">
        <button onClick={handleLogout} className='btn btn-danger text-white '>Logout</button>
        </div>
</div>


);
};

export default AdminDashboard;