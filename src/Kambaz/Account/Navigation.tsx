import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AccountNavigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const { pathname } = useLocation();

  return (
    <div
      className="d-flex flex-column align-items-start p-3 border-end"
      style={{ width: "150px", height: "100vh" }}
    >
      {links.includes("Signin") && (
        <Link
          to="/Kambaz/Account/Signin"
          className={`mb-4 text-decoration-none ${pathname === "/Kambaz/Account/Signin" ? "fw-bold" : "text-black"}`}
        >
          <span className="fs-5">Signin</span>
        </Link>
      )}

      {links.includes("Signup") && (
        <Link
          to="/Kambaz/Account/Signup"
          className={`mb-4 text-decoration-none ${pathname === "/Kambaz/Account/Signup" ? "fw-bold" : "text-black"}`}
        >
          <span className="fs-5">Signup</span>
        </Link>
      )}

      {links.includes("Profile") && (
        <Link
          to="/Kambaz/Account/Profile"
          className={`text-decoration-none ${pathname === "/Kambaz/Account/Profile" ? "fw-bold " : "text-black"}`}
        >
          <span className="fs-5">Profile</span>
        </Link>
      )}
    </div>
  );
}
