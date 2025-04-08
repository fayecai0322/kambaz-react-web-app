import { BsGripVertical } from "react-icons/bs";
import { FaSearch, FaRegFileAlt, FaTrash } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { deleteAssignment as deleteAssignmentAPI } from "./client";
import { AssignmentButtons } from "./AssignmentButtons";
import AssignmentPercentageButton from "./AssignmentPercentageButton";

export default function Assignments() {
  const { cid } = useParams();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) =>
    state.assignmentsReducer.assignments.filter((assignment: any) => assignment.course === cid)
  );

  return (
    <div className="container mt-4">
      {/* Top Section */}
      <div className="d-flex align-items-center mb-3">
        {/* Search Bar */}
        <div className="input-group me-auto" style={{ maxWidth: "300px" }}>
          <span className="input-group-text bg-white border-end-0">
            <FaSearch className="text-muted" />
          </span>
          <input
            type="text"
            className="form-control border-start-0"
            placeholder="Search..."
          />
        </div>

        {/* Add Assignment Buttons */}
        <AssignmentButtons />
      </div>

      {/* Assignments Section */}
      <ul id="wd-assignments" className="list-group rounded-0">
        <li className="wd-assignment list-group-item p-0 mb-5 fs-5 border-gray">
          <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
            <div className="d-flex align-items-center">
              <BsGripVertical className="me-2 fs-3" />
              ASSIGNMENTS
            </div>
            <AssignmentPercentageButton />
          </div>

          {/* Dynamically Render Assignments */}
          <ul className="list-group rounded-0">
            {assignments.length > 0 ? (
              assignments.map((assignment: any) => (
                <li key={assignment._id} className="list-group-item p-3 d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-start">
                    <BsGripVertical className="me-2 fs-3" />
                    <div>
                      <Link
                        to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`}
                        className="text-dark text-decoration-none"
                      >
                        <div className="d-flex align-items-center">
                          <FaRegFileAlt className="me-2 text-success fs-5" />
                          <strong>{assignment.title}</strong>
                        </div>
                      </Link>
                      <p className="text-muted mb-0 ms-4 fs-6">
                        Due: {assignment.due || "TBD"} | Points: {assignment.points || "N/A"}
                      </p>
                    </div>
                  </div>

                  {/* Delete Button */}
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={async () => {
                      try {
                        await deleteAssignmentAPI(assignment._id);  // ✅ 调用后端删除接口
                        dispatch(deleteAssignment(assignment._id)); // ✅ 再更新 Redux
                      } catch (error) {
                        console.error("❌ 删除作业失败", error);
                      }
                    }}
                  >
                    <FaTrash />
                  </button>
                </li>
              ))
            ) : (
              <p className="text-center text-muted p-3">No assignments available.</p>
            )}
          </ul>
        </li>
      </ul>
    </div>
  );
}
