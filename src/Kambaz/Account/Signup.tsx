import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div id="wd-signup-screen" className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Sign Up</h3>
        <form>
          {/* Username Input */}
          <div className="mb-3">
            <input
              placeholder="Username"
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

          {/* Confirm Password Input */}
          <div className="mb-3">
            <input
              placeholder="Confirm Password"
              id="wd-confirm-password"
              className="form-control"
              type="password"
            />
          </div>

          {/* Sign Up Button */}
          <div className="d-grid">
            <Link to="/Kambaz/Dashboard" id="wd-signup-btn" className="btn btn-primary">
              Sign Up
            </Link>
          </div>
        </form>

        {/* Sign In Link */}
        <div className="text-center mt-3">
          <p className="mb-0">
            Already have an account?{" "}
            <Link to="/Kambaz/Account/Signin" id="wd-signin-link" className="text-decoration-none">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
