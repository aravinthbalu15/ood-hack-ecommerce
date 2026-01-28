import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center bg-light">
      <div className="row shadow-lg rounded bg-white w-100" style={{ maxWidth: "900px" }}>
        
        <div className="col-md-6 d-none d-md-flex bg-success text-white align-items-center justify-content-center flex-column rounded-start">
          <h2>Welcome Back</h2>
          <p>Login to continue</p>
        </div>

        <div className="col-md-6 p-4">
          <h3 className="text-center mb-4">Login</h3>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input type="email" className="form-control" placeholder="Email ID" onChange={(e) => setEmail(e.target.value)} required />
            </div>

            <div className="mb-3">
              <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
            </div>

            <button className="btn btn-success w-100">Login</button>

            <p className="text-center mt-3">
              New user? <a href="/signup">Create Account</a>
            </p>

          </form>
        </div>
      </div>
    </div>
  );
}
