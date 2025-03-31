import {  useNavigate } from "react-router-dom";
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
    const updated = await client.updateUser(profile);
    dispatch(setCurrentUser(updated));
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
    <div className="container py-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-5" style={{ maxWidth: "1000px", width: "100%" }}>
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
            <div className="d-flex justify-content-between mt-3">
              <button
                onClick={updateProfile}
                className="btn btn-primary"
                style={{ minWidth: "120px", fontSize: "14px", whiteSpace: "nowrap" }}
              >
                Update
              </button>
              <button
                onClick={signout}
                className="btn btn-danger"
                style={{ minWidth: "120px", fontSize: "14px", whiteSpace: "nowrap" }}
                id="wd-signout-btn"
              >
                Sign Out
              </button>
              {/* <Link
                to="/Kambaz/Dashboard"
                className="btn btn-secondary"
                style={{ minWidth: "120px", fontSize: "14px", whiteSpace: "nowrap" }}
              >
                Save
              </Link> */}
            </div>

          </form>
        )}
      </div>
    </div>
  );
}
