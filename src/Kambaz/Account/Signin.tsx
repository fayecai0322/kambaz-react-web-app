import { Link } from "react-router-dom";

export default function Signin() {
  return (
    <div id="wd-signin-screen" className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Sign In</h3>
        <form>
          {/* Username Input */}
          <div className="mb-3">
            <input
              placeholder="username"
              id="wd-username"
              className="form-control"
              type="text"
            />
          </div>

          {/* Password Input */}
          <div className="mb-3">
            <input
              placeholder="Password"
              id="wd-password"
              className="form-control"
              type="password"
            />
          </div>

          {/* Sign In Button */}
          <div className="d-grid">
            <Link to="/Kambaz/Dashboard" id="wd-signin-btn" className="btn btn-primary">
              Sign In
            </Link>
          </div>
        </form>

        {/* Sign Up Link */}
        <div className="text-center mt-3">
          <p className="mb-0">
            Don't have an account?{" "}
            <Link to="/Kambaz/Account/Signup" id="wd-signup-link" className="text-decoration-none">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
