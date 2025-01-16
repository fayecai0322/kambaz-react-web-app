import {Navigate,Route,Routes} from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Grades from "./Grades";
import Quizzes from "./Quizzes";
import Quiz from "./Quizzes/Quiz";
import People from "./People";

export default function Courses() {
    return (
      <div id="wd-courses">
        <h2>Course 1234</h2><hr />
        <table>
            <tr>
                <td valign="top"><CoursesNavigation /></td>
                <td valign="top">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor/>} />
                        <Route path="People" element={<People />} />
                        <Route path="Zoom" element={<Zoom />} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="Quizzes" element={<Quizzes/>} />
                        <Route path="Quizzes/:aid" element={<Quiz />} />
                        <Route path="Piazza" element={<Piazza />} />
                    </Routes>
                </td>
            </tr>
        </table>
      </div>
  );}
  