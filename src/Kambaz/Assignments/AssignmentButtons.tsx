import { FaPlus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { createAssignment, fetchAssignmentsForCourse } from "./client";  // axios 封装
import { addAssignment, setAssignments } from "./reducer";    // Redux action

export function AssignmentButtons() {
  const { cid } = useParams();
  const dispatch = useDispatch();

  // ✅ 页面加载时，获取该课程下所有 assignments 并设置到 Redux
  useEffect(() => {
    const loadAssignments = async () => {
      try {
        if (!cid) return;
        const assignments = await fetchAssignmentsForCourse(cid);
        dispatch(setAssignments(assignments));
      } catch (error) {
        console.error("Eroor in load Assignment", error);
      }
    };
    loadAssignments();
  }, [cid]);

  // ✅ 点击按钮创建新 assignment
  const handleAddAssignment = async () => {
    const newAssignment = {
      title: "New Assignment",
      description: "Default Description",
      points: 100,
      due: "2025-05-01",
      availableFrom: "2025-04-01",
      availableUntil: "2025-05-10",
      course: cid,
    };
    try {
      if (!cid) return;
      const created = await createAssignment(cid, newAssignment);
      dispatch(addAssignment(created));
    } catch (err) {
      console.error("创建作业失败", err);
    }
  };

  return (
    <div className="d-flex">
      <button
        id="wd-group-assignment-btn"
        className="btn btn-sm btn-secondary d-flex align-items-center justify-content-center me-2"
        style={{ height: "36px", padding: "0 16px", fontSize: "14px" }}
      >
        <FaPlus className="me-2" />
        Group
      </button>
      <button
        id="wd-add-assignment-btn"
        className="btn btn-sm btn-danger d-flex align-items-center justify-content-center"
        style={{ height: "36px", padding: "0 16px", fontSize: "14px" }}
        onClick={handleAddAssignment}
      >
        <FaPlus className="me-2" />
        Assignment
      </button>
    </div>
  );
}
