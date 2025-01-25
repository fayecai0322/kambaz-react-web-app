import { Link } from "react-router-dom";

export default function AccountNavigation() {
  return (
    <div
      className="d-flex flex-column align-items-start p-3 border-end"
      style={{ width: "150px", height: "100vh" }}
    >
      {/* Signin */}
      <Link to="/Kambaz/Account/Signin" className="mb-4 text-decoration-none">
        <span className="text-black fs-5">Signin</span>
      </Link>

      {/* Signup */}
      <Link to="/Kambaz/Account/Signup" className="mb-4 text-decoration-none">
        <span className="text-danger  fs-5">Signup</span>
      </Link>

      {/* Profile */}
      <Link to="/Kambaz/Account/Profile" className="text-decoration-none">
        <span className="text-danger fs-5">Profile</span>
      </Link>
    </div>
  );
}


