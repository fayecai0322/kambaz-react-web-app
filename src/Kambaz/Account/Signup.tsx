import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setCurrentUser } from "./reducer"; // Make sure this is correctly imported
import * as db from "../Database"; 
import { v4 as uuidv4 } from "uuid";

export default function Signup() {
  const [credentials, setCredentials] = useState<any>({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signup = () => {
    // Validate if passwords match
    if (credentials.password !== credentials.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Check if username already exists
    const existingUser = db.users.find((u: any) => u.username === credentials.username);
    if (existingUser) {
      alert("Username already exists. Please choose another one.");
      return;
    }

    // Create new user with minimal required fields
    const newUser = {
      _id: uuidv4(),
      username: credentials.username,
      password: credentials.password,
    };

    // Dispatch to Redux
    dispatch(setCurrentUser(newUser));

    // Navigate to Dashboard
    navigate("/Kambaz/Dashboard");
  };

  return (
    <div id="wd-signup-screen" className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Sign Up</h3>

        {/* Username Input */}
        <input
          placeholder="Username"
          id="wd-username"
          className="form-control mb-2"
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        />

        {/* Password Input */}
        <input
          placeholder="Password"
          id="wd-password"
          className="form-control mb-2"
          type="password"
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        />

        {/* Confirm Password Input */}
        <input
          placeholder="Confirm Password"
          id="wd-confirm-password"
          className="form-control mb-2"
          type="password"
          onChange={(e) => setCredentials({ ...credentials, confirmPassword: e.target.value })}
        />

        {/* Sign Up Button */}
        <button onClick={signup} id="wd-signup-btn" className="btn btn-primary w-100">
          Sign Up
        </button>

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
