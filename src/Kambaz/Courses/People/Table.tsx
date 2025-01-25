import { FaUserCircle } from "react-icons/fa";
export default function PeopleTable() {
return (
    <div id="wd-people-table">
        <table className="table table-striped">
            <thead>
                <tr><th>Name</th><th>Login ID</th><th>Section</th><th>Role</th><th>Last Activity</th><th>Total Activity</th></tr>
            </thead>
            <tbody>
                <tr>
                    <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Tony</span>{" "}
                    <span className="wd-last-name">Stark</span></td>
                    <td className="wd-login-id">001234561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">10:21:32</td> 
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Tom</span>{" "}
                    <span className="wd-last-name">Hanks</span></td>
                    <td className="wd-login-id">0199f505S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2022-10-11</td>
                    <td className="wd-total-activity">12:21:32</td> 
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Sherry</span>{" "}
                    <span className="wd-last-name">Stone</span></td>
                    <td className="wd-login-id">001wr54561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">10:21:32</td> 
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Mary</span>{" "}
                    <span className="wd-last-name">Stone</span></td>
                    <td className="wd-login-id">001wr54561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">12:21:32</td> 
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Sherry</span>{" "}
                    <span className="wd-last-name">Stone</span></td>
                    <td className="wd-login-id">001wr54561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">10:21:30</td> 
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Tony</span>{" "}
                    <span className="wd-last-name">Stark</span></td>
                    <td className="wd-login-id">001234561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">10:21:32</td> 
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Alice</span>{" "}
                    <span className="wd-last-name">Hanks</span></td>
                    <td className="wd-login-id">0199f505S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2022-10-11</td>
                    <td className="wd-total-activity">12:21:32</td> 
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Tjkny</span>{" "}
                    <span className="wd-last-name">Stjark</span></td>
                    <td className="wd-login-id">001234561S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2020-10-01</td>
                    <td className="wd-total-activity">10:21:32</td> 
                </tr>
                <tr>
                    <td className="wd-full-name text-nowrap">
                    <FaUserCircle className="me-2 fs-1 text-secondary" />
                    <span className="wd-first-name">Blice</span>{" "}
                    <span className="wd-last-name">Hanks</span></td>
                    <td className="wd-login-id">0199f505S</td>
                    <td className="wd-section">S101</td>
                    <td className="wd-role">STUDENT</td>
                    <td className="wd-last-activity">2022-10-11</td>
                    <td className="wd-total-activity">12:21:32</td> 
                </tr>
            </tbody>
        </table>
</div> );}