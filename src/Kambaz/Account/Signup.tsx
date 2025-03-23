import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { setCurrentUser } from "./reducer"; // Make sure this is correctly imported
import * as client from "./client";

export default function Signup() {
  const [user, setUser] = useState<any>({});
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    console.log("📢 Signup button clicked!");
    console.log("👤 User input:", user);

    if (!user.username || !user.password) {
        alert("⚠️ Please enter username and password!");
        return;
    }

    try {
        console.log("🚀 Calling client.signup(user)");
        const currentUser = await client.signup(user);
        console.log("✅ Signup response:", currentUser);

        if (!currentUser || "error" in currentUser) {
            console.error("❌ Signup failed:", currentUser);
            alert(currentUser.error || "Signup failed!");
            return;
        }

        console.log("🚀 Dispatching setCurrentUser:", currentUser);
        dispatch(setCurrentUser(currentUser));
        
        console.log("🔄 Navigating to profile...");
        navigate("/Kambaz/Account/Profile");
    } catch (error) {
        console.error("❌ Signup API error:", error);
        alert("Signup failed! Please try again.");
    }
};

  return (
    <div id="wd-signup-screen" className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <h3 className="text-center mb-4">Sign Up</h3>

        {/* Username Input */}
        <input value={user.username} onChange = {(e) => setUser({...user, username: e.target.value})}
              className="wd-username form-control mb-2"
              placeholder="Username" />

        {/* Password Input */}
        <input value={user.password} onChange = {(e) => setUser({...user, password: e.target.value})} type ="password"
            className="form-control mb-2" placeholder="Password" />

        {/* Sign Up Button */}
        <button onClick={signup} className="wd-signup-btn btn btn-primary mb-2 w-1000"> 
        Sign Up </button><br />

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
