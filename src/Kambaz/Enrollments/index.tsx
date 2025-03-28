import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as client from "./client";
import { enrollStudent, unenrollStudent } from "./reducer";


export default function Enrollments({ userId }: { userId: string }) {
  const dispatch = useDispatch();
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);

  useEffect(() => {
    const load = async () => {
      const userEnrollments = await client.findEnrollmentsByUser(userId);
      userEnrollments.forEach((e: any) => dispatch(enrollStudent(e)));
    };
    load();
  }, [userId]);

  return (
    <div>
      <h5>My Enrollments</h5>
      <ul className="list-group">
        {enrollments.map((e: any) => (
          <li key={e._id} className="list-group-item d-flex justify-content-between">
            {e.course}
            <button
              className="btn btn-sm btn-danger"
              onClick={async () => {
                await client.unenrollFromCourse(e.user, e.course); // ✅ 调用后端
                dispatch(unenrollStudent(e)); // ✅ 然后更新 Redux
              }}
            >
              Unenroll
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
