import { Navigate, Route, Routes, useParams } from "react-router";
import CoursesNavigation from "./Navigation";
import Modules from "../Modules";
import Home from "./Home";
import Assignments from "../Assignments";
import AssignmentEditor from "../Assignments/Editor";
import Piazza from "./Piazza";
import Zoom from "./Zoom";
import Grades from "./Grades";
import Quizzes from "./Quizzes";
import Quiz from "./Quizzes/Quiz";
import PeopleTable from "./People/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAlignJustify } from "@fortawesome/free-solid-svg-icons";

export default function Courses({ courses }: { courses: any[] }) {
    const { cid } = useParams();

    // If no course ID is provided, redirect to the first course
    if (!cid) {
        return <Navigate to={`/Kambaz/Courses/${courses[0]._id}/Home`} />;
    }

    const course = courses.find((course) => course._id === cid);

    return (
        <div id="wd-courses">
            <h2 className="text-danger">
                <FontAwesomeIcon icon={faAlignJustify} className="me-4 fs-4 mb-1" />
                {course && course.name}
            </h2>
            <div className="d-flex">
                {/* Sidebar Navigation */}
                <div className="d-none d-md-block">
                    <CoursesNavigation />
                </div>
                {/* Main Content */}
                <div className="flex-fill">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Assignments/:aid" element={<AssignmentEditor />} />
                        <Route path="People" element={<PeopleTable />} />
                        <Route path="Zoom" element={<Zoom />} />
                        <Route path="Grades" element={<Grades />} />
                        <Route path="Quizzes" element={<Quizzes />} />
                        <Route path="Quizzes/:aid" element={<Quiz />} />
                        <Route path="Piazza" element={<Piazza />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
