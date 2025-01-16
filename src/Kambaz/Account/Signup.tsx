import { Link } from "react-router-dom";
export default function Signup(){
    return(
        <div id="wd-signup-screen">
        <h3>Sign up</h3>
        <input placeholder="username" id="wd-username" /> <br />
        <input placeholder="password" id="wd-password" type="password" /> <br />
        <input placeholder="Confirm password" id="wd-confirm-password" type="confirm password" /> <br />
        <Link  to="/Kambaz/Dashboard" id="wd-signin-btn"> Sign in </Link><br />
      </div>
    )
};