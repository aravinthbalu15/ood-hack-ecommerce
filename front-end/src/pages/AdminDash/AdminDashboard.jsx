import { useState } from "react";
export default function AdminDashboard() {
  return (
    <div className="container-fluid">
      
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark px-4">
        <span className="navbar-brand">Admin Dashboard</span>
        <button className="btn btn-outline-light">Logout</button>
      </nav>

      <div className="row min-vh-100">
        
        {/* Sidebar */}
        <div className="col-md-3 col-lg-2 bg-light p-3">
          <h5>Admin Menu</h5>
          <ul className="nav flex-column">
            <li className="nav-item"><a className="nav-link" href="#">Dashboard</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Users</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Reports</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 col-lg-10 p-4">
          <h2>Welcome Admin 👋</h2>

          <div className="row mt-4">
            <div className="col-md-4 mb-3">
              <div className="card text-white bg-primary">
                <div className="card-body">
                  <h5>Total Users</h5>
                  <h3>120</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card text-white bg-success">
                <div className="card-body">
                  <h5>Active Users</h5>
                  <h3>85</h3>
                </div>
              </div>
            </div>

            <div className="col-md-4 mb-3">
              <div className="card text-white bg-danger">
                <div className="card-body">
                  <h5>Reports</h5>
                  <h3>5</h3>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
