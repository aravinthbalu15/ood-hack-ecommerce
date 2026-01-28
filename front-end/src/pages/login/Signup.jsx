import { useState } from "react";

export default function Signup() {
  const [formData, setFormData] = useState({
    name1: "",
    name2: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: null,
    preview: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImage = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
      preview: URL.createObjectURL(file)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log(formData);
  };

  return (
    <div className="container-fluid min-vh-100 bg-light d-flex align-items-center justify-content-center px-2">
      <div className="card shadow-lg border-0 w-100" style={{ maxWidth: "900px" }}>
        <div className="row g-0">

          {/* Left Info Panel */}
          <div className="col-md-6 d-none d-md-flex bg-primary text-white flex-column justify-content-center align-items-center p-4">
            <h2 className="fw-bold">Hackathon 1</h2>
            <p className="text-center">Create your account and start building amazing things 🚀</p>
          </div>

          {/* Right Form */}
          <div className="col-md-6 p-4 p-md-5">
            <h3 className="text-center mb-4 fw-bold">Create Account</h3>

            <form onSubmit={handleSubmit}>
              
              {/* Profile Image */}
              <div className="text-center mb-4">
                <label htmlFor="imageUpload" className="d-block">
                  <div
                    className="rounded-circle border border-2 border-primary mx-auto d-flex align-items-center justify-content-center"
                    style={{
                      width: "120px",
                      height: "120px",
                      overflow: "hidden",
                      cursor: "pointer"
                    }}
                  >
                    {formData.preview ? (
                      <img
                        src={formData.preview}
                        alt="profile"
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    ) : (
                      <span className="text-muted small">Upload</span>
                    )}
                  </div>
                </label>

                <input
                  type="file"
                  id="imageUpload"
                  className="d-none"
                  accept="image/*"
                  onChange={handleImage}
                  required
                />
              </div>

              {/* First Name */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="First Name"
                  name="name1"
                  onChange={handleChange}
                  required
                />
              </div>
              
              {/*Last Name */}
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  placeholder="Last Name"
                  name="name2"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Email Address"
                  name="email"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Password */}
              <div className="mb-3">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="mb-4">
                <input
                  type="password"
                  className="form-control form-control-lg"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                  onChange={handleChange}
                  required
                />
              </div>

              <button className="btn btn-primary btn-lg w-100">
                Create Account
              </button>

              <p className="text-center mt-3">
                Already have an account?{" "}
                <a href="/login" className="text-decoration-none">
                  Login
                </a>
              </p>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
}
