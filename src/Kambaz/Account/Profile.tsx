import { Link } from "react-router-dom";
export default function Profile() {
  return (
    <div id="wd-profile-screen">
      <h3>Profile</h3>
      <label htmlFor="wd-username">Username:</label><br />
      <input id="wd-username" value="alice" placeholder="username" /><br/>
      
      <label htmlFor="wd-password">Password:</label><br />
      <input id="wd-password" value="123" placeholder="password" type="password" /><br/>
      
      <label htmlFor="wd-firstname">First Name:</label><br />
      <input id="wd-firstname" value="Alice" placeholder="First Name" /><br/>

      <label htmlFor="wd-lastname">Last Name:</label><br />
      <input id="wd-lastname" value="Wonderland" placeholder="Last Name" /><br/>

      <label htmlFor="wd-dob">Date Of Birth:</label><br />
      <input id="wd-dob" value="2000-01-01" type="date" /><br/>

      <label htmlFor="wd-email">Email:</label><br />
      <input id="wd-email" value="alice@wonderland" type="email" /><br/>

      <label htmlFor="wd-role">Role:</label><br />
      <select id="wd-role">
        <option value="USER">User</option>
        <option value="ADMIN">Admin</option>
        <option value="FACULTY">Faculty</option>
        <option value="STUDENT">Student</option>
      </select><br/>
      <Link to="/Kambaz/Account/Signin" >Sign out</Link>
    </div>
);}
