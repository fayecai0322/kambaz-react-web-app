import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div id="wd-profile-screen" className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="card shadow p-4" style={{ maxWidth: "700px", width: "100%" }}>
        <h3 className="text-center mb-4">Profile</h3>
        <form>
          {/* Username */}
          <div className="mb-3">
            <input
              id="wd-username"
              className="form-control"
              value="alice"
              placeholder="Username"
              type="text"
            />
          </div>

          {/* Password */}
          <div className="mb-3">
            <input
              id="wd-password"
              className="form-control"
              value="123"
              placeholder="Password"
              type="password"
            />
          </div>

          {/* First Name */}
          <div className="mb-3">
            <input
              id="wd-firstname"
              className="form-control"
              value="Alice"
              placeholder="First Name"
              type="text"
            />
          </div>

          {/* Last Name */}
          <div className="mb-3">
            <input
              id="wd-lastname"
              className="form-control"
              value="Wonderland"
              placeholder="Last Name"
              type="text"
            />
          </div>

          {/* Date of Birth */}
          <div className="mb-3">
            <input
              id="wd-dob"
              className="form-control"
              value="2000-01-01"
              placeholder="Date of Birth"
              type="date"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <input
              id="wd-email"
              className="form-control"
              value="alice@wonderland"
              placeholder="Email"
              type="email"
            />
          </div>

          {/* Role */}
          <div className="mb-3">
            <select id="wd-role" className="form-control">
              <option value="USER">User</option>
              <option value="ADMIN">Admin</option>
              <option value="FACULTY">Faculty</option>
              <option value="STUDENT">Student</option>
            </select>
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-between mt-4">
            <Link to="/Kambaz/Dashboard" className="btn btn-primary">
              Save
            </Link>
            <Link to="/Kambaz/Account/Signin" className="btn btn-danger">
              Sign Out
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
