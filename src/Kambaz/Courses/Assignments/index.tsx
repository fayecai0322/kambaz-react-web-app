import { BsGripVertical } from "react-icons/bs";
import { FaSearch, FaRegFileAlt } from "react-icons/fa";
import { AssignmentButtons } from "./AssignmentButtons";
import AssignmentControlButtons from "./AssignmentControlButton";
import AssignmentPercentageButton from "./AssignmentPercentageButton";
import { Link } from "react-router-dom";


export default function Assignments() {
  return (
    <div className="container mt-4">
      {/* Top Section: Search Bar and Buttons */}
      <div className="d-flex align-items-center mb-3">
        {/* Search Bar */}
        <div className="input-group me-auto" style={{ maxWidth: "300px" }}>
          <span className="input-group-text bg-white border-end-0">
            <FaSearch className="text-muted" />
          </span>
          <input
            type="text"
            id="wd-search-assignment"
            className="form-control border-start-0"
            placeholder="Search..."
          />
        </div>

        {/* Group and Assignment Buttons */}
        <AssignmentButtons />
      </div>

      {/* Assignments Section */}
      <ul id="wd-assignments" className="list-group rounded-0">
        {/* Assignments Header */}
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <AssignmentPercentageButton />
          </div>

          {/* Assignments List */}
          <ul className="wd-lessons list-group rounded-0">
            {/* Assignment A1 */}
            <li
              className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start justify-content-between"
              style={{ borderLeft: "3px solid green" }} // Green border
            >
              <div className="d-flex align-items-start">
                <BsGripVertical className="me-2 fs-3" />
                <div>
                <Link to="/Kambaz/Courses/1234/Assignments/Editor" className="text-dark text-decoration-none">
                  <div className="d-flex align-items-center">
                  <FaRegFileAlt className="me-2 text-success fs-5" />
                    <strong>A1</strong>
                  </div>
                  </Link>
                  <p className="text-muted mb-0 ms-4 fs-6">
                  <span className="text-danger"> Multiple Modules </span> | Not available until May 6 at 12:00 am |
                    Due May 13 at 11:59 pm | 100 pts
                  </p>
                </div>
              </div>
              <AssignmentControlButtons />
            </li>

            {/* Assignment A2 */}
            <li
              className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start justify-content-between"
              style={{ borderLeft: "3px solid green" }} // Green border
            >
              <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3" /> 
                <div>
                <Link to="/Kambaz/Courses/1234/Assignments/Editor" className="text-dark text-decoration-none">
                  <div className="d-flex align-items-center">
                  <FaRegFileAlt className="me-2 text-success fs-5" />
                    <strong>A2</strong>
                  </div>
                  </Link>
                  <p className="text-muted mb-0 ms-4 fs-6">
                  <span className="text-danger"> Multiple Modules </span> | Not available until May 13 at 12:00 am |
                    Due May 20 at 11:59 pm | 100 pts
                  </p>
                </div>
              </div>
              <AssignmentControlButtons />
            </li>

            {/* Assignment A3 */}
            <li
              className="wd-lesson list-group-item p-3 ps-1 d-flex align-items-start justify-content-between"
              style={{ borderLeft: "3px solid green" }} // Green border
            >
              <div className="d-flex align-items-start">
              <BsGripVertical className="me-2 fs-3" />
                <div>
                <Link to="/Kambaz/Courses/1234/Assignments/Editor" className="text-dark text-decoration-none">
                  <div className="d-flex align-items-center">  
                  <FaRegFileAlt className="me-2 text-success fs-5" />
                    <strong>A3</strong>
                  </div>
                  </Link>
                  
                  <p className="text-muted mb-0 ms-4 fs-6">
                    <span className="text-danger"> Multiple Modules </span>| Not available until May 20 at 12:00 am |
                    Due May 27 at 11:59 pm | 100 pts
                  </p>
                </div>
              </div>
              <AssignmentControlButtons />
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

