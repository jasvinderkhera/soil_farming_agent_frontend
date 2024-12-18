import React, { useState, useEffect } from "react";
import {ref, onValue, set } from "firebase/database";
import {auth, realtimeDb} from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";


const UserDashboard = () => {
  const [schemes, setSchemes] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const schemesRef = ref(realtimeDb, "schemes");
    onValue(schemesRef, (snapshot) => {
      const data = snapshot.val();
      const schemeList = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];
      setSchemes(schemeList);
    });
  }, []);

  const applyForScheme = (schemeId) => {
    const user = auth.currentUser;
    if (user) {
      const applicationRef = ref(
        realtimeDb,
        `schemes/${schemeId}/applications/${user.uid}`
      );
      set(applicationRef, {
        userEmail: user.email,
        status: "Pending",
    })
    .then(() => {
      alert("Application submitted successfully");
    })
    .catch((error) => {
      console.error("Error applying for scheme:", error);
      alert("Failed to apply. Try again.");
    });
} else {
  alert("You must be logged in to apply.");
}
};

const handleLogout = () => {
  auth.signOut();
  navigate('/')
};

return (
<div>
  <h2>Available Schemes</h2>
  {schemes.map((scheme) => (
    <div key={scheme.id}>
      <h3>{scheme.title}</h3>
      <p>{scheme.details}</p>
      <button onClick={() => applyForScheme(scheme.id)}>Apply</button>
    </div>
  ))}

<div className="d-flex py-4 justify-content-center align-items-center">
        <button onClick={handleLogout} className='btn btn-danger text-white '>Logout</button>
        </div>
</div>
);
};

export default UserDashboard;
