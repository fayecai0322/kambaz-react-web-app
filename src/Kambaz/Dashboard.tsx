import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { setEnrollments, enrollStudent, unenrollStudent } from "./Enrollments/reducer";
import * as enrollmentsClient from "./Enrollments/client";
import { toast } from "react-toastify";

// ✅ 类型定义
interface Course {
  _id: string;
  name: string;
  number: string;
  startDate: string;
  endDate: string;
  department: string;
  credits: number;
  description: string;
  author?: string;
  image?: string;
  enrolled?: boolean; 
}

interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

interface DashboardProps {
  courses: Course[];
  course: Course;
  setCourse: (course: Course) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
  fetchAllCourses: () => Promise<void>;
  enrolling?: boolean; // ✅ 新增
  setEnrolling?: React.Dispatch<React.SetStateAction<boolean>>; 
  updateEnrollment?: (courseId: string, enrolled: boolean) => Promise<void>;
}

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
  fetchAllCourses,
  enrolling,
  setEnrolling,
  updateEnrollment
}: DashboardProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const [mode, setMode] = useState<"ENROLL" | "UNENROLL">("ENROLL");
  const isEnrolled = (courseId: string) =>
    Array.isArray(enrollments) &&
    enrollments.some((e: Enrollment) => e.user === currentUser?._id && e.course === courseId);

    const filteredCourses = enrolling
    ? courses.filter((course) => course.enrolled)
    : courses;

  useEffect(() => {
    const fetchEnrollments = async () => {
      if (!currentUser?._id) return;
      const data = await enrollmentsClient.findEnrollmentsByUser(currentUser._id);
      dispatch(setEnrollments(data));
    };
    fetchEnrollments();
  }, [currentUser, dispatch]);

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">
        Dashboard {currentUser?.role ? `- ${currentUser.role}` : ""}
        {currentUser?.role === "STUDENT" && enrolling !== undefined && setEnrolling && (
          <button
            onClick={() => setEnrolling(!enrolling)}
            className="float-end btn btn-primary btn-sm ms-2"
          >
            {enrolling ? "My Courses" : "All Courses"}
          </button>
        )}
      </h1>
      <hr />

      {/* ✅ ADMIN 新增课程 */}
      {currentUser?.role === "ADMIN" && (
        <div className="mb-4">
          <h4>New Course</h4>
          <input
            type="text"
            className="form-control mb-2"
            placeholder="New Course Name"
            value={course.name}
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            className="form-control mb-2"
            placeholder="New Description"
            value={course.description}
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <div className="d-flex gap-2">
            <button onClick={updateCourse} className="btn btn-success">
              Save
            </button>
            <button onClick={addNewCourse} className="btn btn-primary">
              Add
            </button>
          </div>
        </div>
      )}

      {/* ✅ 顶部栏：标题 + 切换按钮 */}
      <div className="d-flex justify-content-between align-items-center">
        <h2>Published Courses ({filteredCourses.length})</h2>
        {currentUser?.role === "STUDENT" && (
          <div>
            <button
              className={`btn btn-sm me-2 ${
                mode === "ENROLL" ? "btn-primary" : "btn-outline-primary"
              }`}
              onClick={() => setMode("ENROLL")}
            >
              Enroll
            </button>
            <button
              className={`btn btn-sm ${
                mode === "UNENROLL" ? "btn-danger" : "btn-outline-danger"
              }`}
              onClick={() => setMode("UNENROLL")}
            >
              Unenroll
            </button>
          </div>
        )}
      </div>

      {/* ✅ 课程卡片 */}
      <div className="d-flex flex-wrap gap-3 mt-3">
        {filteredCourses.map((course) => (
          <div key={course._id} style={{ width: "300px" }}>
            <div className="card h-100">
              <Link
                to={`/Kambaz/Courses/${course._id}/Home`}
                className="text-decoration-none text-dark"
              >
                <img
                  src={course.image ?? "/images/reactjs.jpg"}
                  alt="Course"
                  className="card-img-top"
                  height={160}
                />
                <div className="card-body">
                  {/* <h5 className="card-title">{course.name}</h5> */}
                  <h5 className="card-title wd-dashboard-course-title">
                  {enrolling && updateEnrollment && (
                    <button
                      onClick={(event) => {
                        event.preventDefault(); // ✅ 避免 Link 跳转
                        updateEnrollment(course._id, !course.enrolled);
                      }}
                      className={`btn ${course.enrolled ? "btn-danger" : "btn-success"} float-end`}
                    >
                      {course.enrolled ? "Unenroll" : "Enroll"}
                    </button>
                  )}
                  {course.name}
                </h5>
                  <p
                    className="card-text"
                    style={{ maxHeight: 100, overflowY: "auto" }}
                  >
                    {course.description}
                  </p>
                </div>
              </Link>

              {/* ✅ 操作按钮区域 */}
              <div className="d-flex justify-content-between align-items-center px-2 pb-2">
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="btn btn-primary btn-sm"
                >
                  Go
                </Link>

                {/* Admin 按钮 */}
                {currentUser?.role === "ADMIN" && (
                  <div className="d-flex gap-1">
                    <button
                      className="btn btn-warning btn-sm"
                      onClick={() => setCourse(course)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={async () => {
                        await deleteCourse(course._id);
                        await fetchAllCourses(); // ✅ 自动刷新课程
                      }}
                    >
                      Delete
                    </button>
                  </div>
                )}

                {/* Student 按钮 */}
                {currentUser?.role === "STUDENT" && (
                  <div className="d-flex gap-1">
                    {mode === "ENROLL" && !isEnrolled(course._id) && (
                      <button
                        className="btn btn-outline-success btn-sm"
                        onClick={async () => {
                          try {
                            await enrollmentsClient.enrollInCourse(
                              currentUser._id,
                              course._id
                            );
                            dispatch(
                              enrollStudent({
                                _id: "temp",
                                user: currentUser._id,
                                course: course._id,
                              })
                            );
                            toast.success("✅ Enrolled successfully!");
                          } catch (err) {
                            toast.error("❌ Failed to enroll");
                          }
                        }}
                      >
                        Enroll
                      </button>
                    )}
                    {mode === "UNENROLL" && isEnrolled(course._id) && (
                      <button
                        className="btn btn-outline-danger btn-sm"
                        onClick={async () => {
                          try {
                            await enrollmentsClient.unenrollFromCourse(
                              currentUser._id,
                              course._id
                            );
                            dispatch(
                              unenrollStudent({
                                user: currentUser._id,
                                course: course._id,
                                _id: "",
                              })
                            );
                            toast.success("✅ Unenrolled!");
                          } catch (err) {
                            toast.error("❌ Failed to unenroll");
                          }
                        }}
                      >
                        Unenroll
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}