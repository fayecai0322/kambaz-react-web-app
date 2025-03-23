import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Profile() {
  const [profile, setProfile] = useState<any>({});
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const updateProfile = async() => {
    await client.updateUser(profile);
    dispatch(setCurrentUser(updateProfile));
  };
    

  const fetchProfile = () => {
    if (!currentUser) return navigate("/Kambaz/Account/Signin");
    setProfile(currentUser);
  };

  const signout = async() => {
    await client.signout();
    dispatch(setCurrentUser(null));
    navigate("/Kambaz/Account/Signin");
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: "700px", width: "100%" }}>
        <h3 className="text-center mb-4">Profile</h3>
        
        {profile && (
          <form>
            {/* Username */}
            <div className="mb-3">
              <input
                defaultValue={profile.username}
                id="wd-username"
                className="form-control"
                placeholder="Username"
                onChange={(e) => setProfile({ ...profile, username: e.target.value })}
              />
            </div>

            {/* Password */}
            <div className="mb-3">
              <input
                defaultValue={profile.password}
                id="wd-password"
                className="form-control"
                placeholder="Password"
                type="password"
                onChange={(e) => setProfile({ ...profile, password: e.target.value })}
              />
            </div>

            {/* First Name */}
            <div className="mb-3">
              <input
                defaultValue={profile.firstName}
                id="wd-firstname"
                className="form-control"
                placeholder="First Name"
                onChange={(e) => setProfile({ ...profile, firstName: e.target.value })}
              />
            </div>

            {/* Last Name */}
            <div className="mb-3">
              <input
                defaultValue={profile.lastName}
                id="wd-lastname"
                className="form-control"
                placeholder="Last Name"
                onChange={(e) => setProfile({ ...profile, lastName: e.target.value })}
              />
            </div>

            {/* Date of Birth */}
            <div className="mb-3">
              <input
                defaultValue={profile.dob}
                id="wd-dob"
                className="form-control"
                type="date"
                onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
              />
            </div>

            {/* Email */}
            <div className="mb-3">
              <input
                defaultValue={profile.email}
                id="wd-email"
                className="form-control"
                placeholder="Email"
                type="email"
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
              />
            </div>

            {/* Role Selection */}
            <div className="mb-3">
              <select
                onChange={(e) => setProfile({ ...profile, role: e.target.value })}
                className="form-control"
                id="wd-role"
                defaultValue={profile.role}
              >
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
              </select>
            </div>

            {/* Buttons */}
            <div className="d-flex justify-content-between">
              <button onClick={updateProfile} className="btn btn-primary w-100 mb-2">Update</button>
              <button onClick={signout} className="btn btn-danger w-50" id="wd-signout-btn">
                Sign Out
              </button>
              <Link to="/Kambaz/Dashboard" className="btn btn-primary w-50">
                Save
              </Link>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
