import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
//import * as db from "../Database";
import * as client from "./client";

export default function Signin() {
  const [credentials, setCredentials] = useState<{ username?: string; password?: string }>({});
  const [error, setError] = useState(""); // ✅ Add error handling
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async() => {
    const user = await client.signin(credentials);

    if (!user) {
      setError("Invalid username or password"); // ✅ Display error message
      return;
    }

    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard"); // ✅ Fixed Typo
  };

  return (
    <div id="wd-signin-screen" className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Sign In</h3>

        {/* ✅ Display error message if login fails */}
        {error && <div className="alert alert-danger text-center">{error}</div>}

        {/* Username Input */}
        <input
          value={credentials.username || ""}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          className="form-control mb-2"
          placeholder="Username"
          id="wd-username"
        />

        {/* Password Input */}
        <input
          value={credentials.password || ""}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          className="form-control mb-2"
          placeholder="Password"
          type="password"
          id="wd-password"
        />

        {/* Sign In Button */}
        <button onClick={signin} id="wd-signin-btn" className="btn btn-primary w-100">
          Sign In
        </button>

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
