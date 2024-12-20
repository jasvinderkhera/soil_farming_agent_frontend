import React, { useState, useEffect } from "react";
import "./userDashboard.css"
import { ref, update, onValue } from "firebase/database";
import { auth, realtimeDb } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

const UserDashboard = () => {
  const [schemes, setSchemes] = useState([]);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    annualIncome: "",
    aadharNumber: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    const schemesRef = ref(realtimeDb, "schemes");
    const unsubscribe = onValue(schemesRef, (snapshot) => {
      const data = snapshot.val();
      const schemeList = data
        ? Object.keys(data).map((key) => ({ id: key, ...data[key] }))
        : [];
      setSchemes(schemeList);
    });

    return () => unsubscribe();
  }, []);

  const handleSchemeSelect = (scheme) => {
    setSelectedScheme(scheme);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const handleSubmitDetails = (e) => {
    e.preventDefault();

    const user = auth.currentUser;
    if (!user || !selectedScheme) {
      alert("You must be logged in and select a scheme to apply.");
      return;
    }

    const userId = user.uid;
    const appliedAt = new Date().toISOString();

    const updates = {
      // Add user application with details
      [`schemes/${selectedScheme.id}/applicants/${userId}`]: {
        ...userDetails,
        appliedAt,
        status: "Pending",
      },
      // Add scheme to user's applied schemes
      [`users/${userId}/appliedSchemes/${selectedScheme.id}`]: {
        appliedAt,
        status: "Pending",
        schemeTitle: selectedScheme.title,
      },
    };

    update(ref(realtimeDb), updates)
      .then(() => {
        alert("Application submitted successfully! Your application is pending approval.");
        setUserDetails({ name: "", email: "", phone: "", annualIncome: "", aadharNumber: "" });
      })
      .catch((error) => {
        console.error("Error submitting application:", error);
        alert("Failed to submit application.");
      });
  };

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div>
      <div className="topContainer container">
        <div className="d-flex py-4 justify-content-end align-items-center">
          <button onClick={handleLogout} className="btn btn-danger text-white">
            Logout
          </button>
        </div>
        <div className="row">
          {/* Schemes List */}
          <div className="schemesList col-md-4 py-3 px-3 border border-black border-1">
            <h2>Available Schemes</h2>
            {schemes.length > 0 ? (
              schemes.map((scheme) => (
                <div key={scheme.id} className="my-3 p-2 border border-black border-1">
                  <h4>{scheme.title}</h4>
                  <p>{scheme.summary}</p>
                  <p className="text-center">
                  <button
                    onClick={() => handleSchemeSelect(scheme)}
                    className="btn btn-primary w-50 text-center"
                  >
                    View Details
                  </button>
                  </p>
                </div>
              ))
            ) : (
              <p>No schemes available at the moment.</p>
            )}
          </div>

          {/* Scheme Details and Application Form */}
          <div className="col-md-8 py-3 px-3">
            {selectedScheme ? (
              <>
                <div className="my-5">
                <h2 className="text-center">Scheme Details</h2>
                <h4>{selectedScheme.title}</h4>
                <p><strong>Summary:</strong> {selectedScheme.summary}</p>
                <p><strong>Details:</strong> {selectedScheme.details}</p>
                </div>
                <form onSubmit={handleSubmitDetails} className="p-4">
                  <h4 className="text-center">Fill Your Details</h4>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="text"
                      name="phone"
                      placeholder="Your Phone Number"
                      value={userDetails.phone}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      name="annualIncome"
                      placeholder="Your Annual Income"
                      value={userDetails.annualIncome}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                      min={100000}
                      max={250000}
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      type="number"
                      name="aadharNumber"
                      placeholder="Your Aadhar Number"
                      value={userDetails.aadharNumber}
                      onChange={handleInputChange}
                      className="form-control"
                      required
                      minLength={16}
                      maxLength={16}
                    />
                  </div>
                  <button type="submit" className="btn btn-success w-100 py-2 fw-bold">
                    Submit Application
                  </button>
                </form>
              </>
            ) : (
              <p className="text-center text-muted">Select a scheme to view details and apply.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
