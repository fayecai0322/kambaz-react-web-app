import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { addAssignment, updateAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { cid, aid } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignmentsReducer.assignments);
  const existingAssignment = assignments.find((a: any) => a._id === aid);
  
  const [assignment, setAssignment] = useState(
    existingAssignment || {
      title: "",
      description: "",
      points: 100,
      due: "",
      availableFrom: "",
      availableUntil: "",
      course: cid,
    }
  );

  useEffect(() => {
    if (!existingAssignment && aid !== "new") {
      navigate(`/Kambaz/Courses/${cid}/Assignments`);
    }
  }, [existingAssignment, aid, cid, navigate]);

  const handleSave = () => {
    if (existingAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(`/Kambaz/Courses/${cid}/Assignments`);
  };

  return (
    <div id="wd-assignments-editor" className="container mt-5">
      <p className="mb-4 fs-5">
        <strong>{cid}</strong> &gt; Assignments &gt; {assignment.title || "New Assignment"}
      </p>

      {/* Form */}
      <form>
        {/* Assignment Name */}
        <div className="mb-4">
          <label htmlFor="wd-name" className="form-label">Assignment Name</label>
          <input
            id="wd-name"
            className="form-control"
            value={assignment.title}
            onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          />
        </div>

        {/* Assignment Description */}
        <div className="mb-4">
          <label htmlFor="wd-description" className="form-label">Description</label>
          <textarea
            id="wd-description"
            className="form-control"
            rows={4}
            value={assignment.description}
            onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          ></textarea>
        </div>

        {/* Points Section */}
        <div className="row mb-4">
          <div className="col-md-3">
            <label htmlFor="wd-points" className="form-label"><strong>Points</strong></label>
          </div>
          <div className="col-md-9">
            <input
              id="wd-points"
              type="number"
              className="form-control"
              value={assignment.points}
              onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
            />
          </div>
        </div>

        {/* Assign Section */}
        <div className="row mb-4">
          <div className="col-md-3">
            <label className="form-label"><strong>Assign</strong></label>
          </div>
          <div className="col-md-9">
            <div className="border p-3 rounded">
              {/* Due Date */}
              <div className="mb-3">
                <label className="form-label"><strong>Due</strong></label>
                <input
                  id="wd-due-date"
                  type="date"
                  className="form-control"
                  value={assignment.due}
                  onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
                />
              </div>

              {/* Available From and Until */}
              <div className="row">
                <div className="col-md-6">
                  <label className="form-label"><strong>Available from</strong></label>
                  <input
                    id="wd-available-from"
                    type="date"
                    className="form-control"
                    value={assignment.availableFrom}
                    onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
                  />
                </div>
                <div className="col-md-6">
                  <label className="form-label"><strong>Until</strong></label>
                  <input
                    id="wd-available-until"
                    type="date"
                    className="form-control"
                    value={assignment.availableUntil}
                    onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="d-flex justify-content-end">
          <Link to={`/Kambaz/Courses/${cid}/Assignments`} className="btn btn-secondary me-2">Cancel</Link>
          <button type="button" onClick={handleSave} className="btn btn-primary">Save</button>
        </div>
      </form>
    </div>
  );
}
