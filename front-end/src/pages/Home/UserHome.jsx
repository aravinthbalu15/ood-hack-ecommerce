import { useState } from "react";
export default function UserHome() {
  return (
    <div className="container-fluid">
      
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary px-4">
        <span className="navbar-brand">Hackathon App</span>
        <button className="btn btn-light ms-auto">Logout</button>
      </nav>

      <div className="container mt-5">
        <h2>Welcome User 🎉</h2>
        <p>You have successfully logged in.</p>

        <div className="row mt-4">

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5>My Profile</h5>
                <p>View and update your details</p>
                <button className="btn btn-primary">Open</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5>My Projects</h5>
                <p>View your hackathon submissions</p>
                <button className="btn btn-success">View</button>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="card shadow-sm">
              <div className="card-body text-center">
                <h5>Settings</h5>
                <p>Manage account settings</p>
                <button className="btn btn-warning">Settings</button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
