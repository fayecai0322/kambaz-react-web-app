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
}

export default function Dashboard({
  courses,
}: DashboardProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const [mode, setMode] = useState<"ENROLL" | "UNENROLL">("ENROLL");

  const isEnrolled = (courseId: string) =>
    Array.isArray(enrollments) &&
    enrollments.some((e: Enrollment) => e.user === currentUser?._id && e.course === courseId);

  const filteredCourses =
    mode === "UNENROLL"
      ? courses.filter((course) => isEnrolled(course._id))
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
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <div className="d-flex justify-content-between align-items-center">
        <h2 id="wd-dashboard-published">
          Published Courses ({filteredCourses.length})
        </h2>
      </div>

      <div id="wd-dashboard-courses" className="row mt-3">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                {/* ✅ 图片和课程标题 */}
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  <img src={course?.image ?? "/images/reactjs.jpg"} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p className="wd-dashboard-course-title card-text overflow-y-hidden" style={{ maxHeight: 100 }}>
                      {course.description}
                    </p>
                  </div>
                </Link>

                {/* ✅ 按钮组 */}
                <div className="d-flex justify-content-between align-items-center p-2 pt-0">
                  <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary btn-sm">
                    Go
                  </Link>

                  {mode === "ENROLL" && !isEnrolled(course._id) && (
                    <button
                      className="btn btn-outline-success btn-sm"
                      onClick={async () => {
                        try {
                          await enrollmentsClient.enrollInCourse(currentUser._id, course._id);
                          dispatch(enrollStudent({
                            _id: "temp",
                            user: currentUser._id,
                            course: course._id,
                          }));
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
                          await enrollmentsClient.unenrollFromCourse(currentUser._id, course._id);
                          dispatch(unenrollStudent({
                            user: currentUser._id,
                            course: course._id,
                            _id: "",
                          }));
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
