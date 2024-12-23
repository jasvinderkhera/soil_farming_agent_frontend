import React, { useState, useEffect } from "react";
import './adminDashboard.css'
import { ref, push, set, onValue, update } from "firebase/database";
import { auth, realtimeDb } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const AdminDashboard = () => {
  const [schemeTitle, setSchemeTitle] = useState("");
  const [schemeDetails, setSchemeDetails] = useState("");
  const [summary, setSummary] = useState("");
  const [schemes, setSchemes] = useState([]);
  const [selectedScheme, setSelectedScheme] = useState(null);
  const [toggleTab, setToggleTab] = useState("post");
  const navigate = useNavigate();

  useEffect(() => {
    const schemesRef = ref(realtimeDb, "schemes");
    const unsubscribe = onValue(schemesRef, (snapshot) => {
      const data = snapshot.val();
      const schemeList = data
        ? Object.keys(data).map((key) => ({
            id: key,
            ...data[key],
          }))
        : [];
      setSchemes(schemeList);
    });

    return () => unsubscribe();
  }, []);

  const postScheme = (e) => {
    e.preventDefault();
    const schemeRef = ref(realtimeDb, "schemes");
    const newSchemeRef = push(schemeRef);

    set(newSchemeRef, {
      title: schemeTitle,
      summary: summary,
      details: schemeDetails,
      status: "Pending",
    })
      .then(() => {
        toast.success("Scheme posted successfully");
        setSchemeTitle("");
        setSummary("");
        setSchemeDetails("");
      })
      .catch((error) => {
        console.error("Error posting scheme:", error);
        toast.error("Failed to post scheme. Try again.");
      });
  };

  const handleApprove = (schemeId, userId) => {
    const updates = {};
    updates[`schemes/${schemeId}/applicants/${userId}/status`] = "Approved";
    updates[`users/${userId}/appliedSchemes/${schemeId}/status`] = "Approved";

    update(ref(realtimeDb), updates)
      .then(() => {
        toast.success("Application approved!");
      })
      .catch((error) => {
        console.error("Error approving application:", error);
        toast.error("Failed to approve application.");
      });
  };

  const handleReject = (schemeId, userId) => {
    const updates = {};
    updates[`schemes/${schemeId}/applicants/${userId}/status`] = "Rejected";
    updates[`users/${userId}/appliedSchemes/${schemeId}/status`] = "Rejected";

    update(ref(realtimeDb), updates)
      .then(() => {
        toast.error("Application rejected!");
      })
      .catch((error) => {
        console.error("Error rejecting application:", error);
        toast.error("Failed to reject application.");
      });
  };

  const handleLogout = () => {
    auth.signOut();
    navigate("/");
  };


  return (
    <div>
      <div className="topContainer container">
        <div className="d-flex py-4 justify-content-end gap-4 align-items-center">
          <button
            type="button"
            className="postScheme btn btn-primary"
            onClick={() => setToggleTab("post")}
          >
            Post Scheme
          </button>
          <button
            type="button"
            className="viewApplications btn btn-warning"
            onClick={() => setToggleTab("view")}
          >
            View Applications
          </button>

          <button onClick={handleLogout} className="btn btn-danger text-white">
            Logout
          </button>
        </div>

        <div className="row">
          {/* Schemes List */}
          <div className="schemesList col-md-4 py-3 px-3 border border-black border-1">
            <h2>Available Schemes</h2>
            {schemes.map((scheme) => (
              <div
                key={scheme.id}
                className="my-3 p-2 border border-black border-1"
              >
                <h4>{scheme.title}</h4>
                <p>{scheme.summary}</p>
                <button
                  onClick={() => {setSelectedScheme(scheme); setToggleTab("view")}}
                  className="btn btn-primary"
                >
                  View Applicants
                </button>
              </div>
            ))}
          </div>

          {/* Applicants or Post Scheme Section */}
          <div className="col-md-8 py-3 px-3">
            {toggleTab === "view" ? (
              // View Applications Section
              selectedScheme ? (
                <>
                  <h2 className="text-center">
                    Applicants for {selectedScheme.title}
                  </h2>
                  {selectedScheme.applicants ? (
                    Object.keys(selectedScheme.applicants).map((userId) => {
                      const applicant = selectedScheme.applicants[userId];
                      return (
                        <div
                          key={userId}
                          className="my-3 p-4 border border-black border-1"
                        >
                          <p>
                            <strong>User ID:</strong> {userId}
                          </p>
                          <p>
                            <strong>Name:</strong> {applicant.name || "N/A"}
                          </p>
                          <p>
                            <strong>Email:</strong> {applicant.email || "N/A"}
                          </p>
                          <p>
                            <strong>Phone:</strong> {applicant.phone || "N/A"}
                          </p>
                          <p>
                            <strong>Aadhar Number:</strong>{" "}
                            {applicant.aadharNumber || "N/A"}
                          </p>
                          <p>
                            <strong>Annual Income:</strong>{" "}
                            {applicant.annualIncome || "N/A"}
                          </p>
                          <p>
                            <strong>Applied At:</strong>{" "}
                            {new Date(applicant.appliedAt).toLocaleString()}
                          </p>
                          <p>
                            <strong>Status:</strong> {applicant.status}
                          </p>
                          <div>
                            <button
                              onClick={() =>
                                handleApprove(selectedScheme.id, userId)
                              }
                              className="btn btn-success mx-2"
                            >
                              Approve
                            </button>
                            <button
                              onClick={() =>
                                handleReject(selectedScheme.id, userId)
                              }
                              className="btn btn-danger mx-2"
                            >
                              Reject
                            </button>
                          </div>
                        </div>
                      );
                    })
                  ) : (
                    <p className="text-muted">
                      No applicants for this scheme yet.
                    </p>
                  )}
                </>
              ) : (
                <p className="text-center text-muted">
                  Select a scheme to view applicants.
                </p>
              )
            ) : (
              // Post Scheme Section
              <form onSubmit={postScheme}>
                <h2 className="mb-4 text-center">Post a New Scheme</h2>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Scheme Title"
                    value={schemeTitle}
                    onChange={(e) => setSchemeTitle(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    placeholder="Scheme Summary"
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    placeholder="Scheme Details"
                    value={schemeDetails}
                    onChange={(e) => setSchemeDetails(e.target.value)}
                    className="form-control schemeDetail"
                  />
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-success w-100 py-2 fw-bold">
                    Post Scheme
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
