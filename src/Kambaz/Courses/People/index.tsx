import { FaUserCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Enrollment } from "../../Enrollments/client";
import { User } from "../../Users/reducer";

export default function People() {
  const { cid } = useParams();
  const users = useSelector((state: any) => state.usersReducer.users) as User[];
  const enrollments = useSelector((state: any) => state.enrollmentsReducer.enrollments) as Enrollment[];

  return (
    <div id="wd-people-table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Name</th>
            <th>Login ID</th>
            <th>Section</th>
            <th>Role</th>
            <th>Last Activity</th>
            <th>Total Activity</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((usr: User) =>
              enrollments.some(
                (enrollment: Enrollment) =>
                  enrollment.user === usr._id && enrollment.course === cid
              )
            )
            .map((user: User) => (
              <tr key={user._id}>
                <td className="wd-full-name text-nowrap">
                  <FaUserCircle className="me-2 fs-1 text-secondary" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id">{user.loginId}</td>
                <td className="wd-section">{user.section}</td>
                <td className="wd-role">{user.role}</td>
                <td className="wd-last-activity">{user.lastActivity}</td>
                <td className="wd-total-activity">{user.totalActivity}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
