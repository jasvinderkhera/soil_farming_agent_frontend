import React, { useState } from "react";
import {ref, push, set } from "firebase/database";
import {auth, realtimeDb} from "../../firebase/firebase";

const AdminDashboard = () => {
  const [schemeTitle, setSchemeTitle] = useState("");
  const [schemeDetails, setSchemeDetails] = useState("");

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

return (
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
);
};

export default AdminDashboard;