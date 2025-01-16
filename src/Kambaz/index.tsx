import {Route, Routes, Navigate} from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Inbox from "./Inbox";



export default function Kambaz() {
    return (
        <div id="wd-kambaz">
        <table>
          <tr>
            <td valign="top">
              <KambazNavigation />
            </td>
            <td >
              <Routes>
                <Route path="/" element={<Navigate to="Account" />} />
                <Route path="/Account/*" element={<Account />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route path="/Courses" element={<Dashboard />} />
                <Route path="/Courses/:cid/*" element={<Courses />} />
                <Route path="/Calendar" element={<Calendar />} />
                <Route path="/Inbox" element={<Inbox />} />
              </Routes>
            </td>
          </tr>
        </table>
      </div>
  );}
  
    