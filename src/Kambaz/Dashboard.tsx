import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { enrollStudent, unenrollStudent, setEnrollments } from "./Enrollments/reducer";
import * as enrollmentsClient from "./Enrollments/client";

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
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: DashboardProps) {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const { enrollments } = useSelector((state: any) => state.enrollmentsReducer);
  const dispatch = useDispatch();

  const [mode, setMode] = useState<"ENROLL" | "UNENROLL">("ENROLL");

  const isEnrolled = (courseId: string) =>
    Array.isArray(enrollments) &&
    enrollments.some((e: Enrollment) => e.user === currentUser?._id && e.course === courseId);

  const handleEnroll = async (courseId: string) => {
    await enrollmentsClient.enrollInCourse(currentUser._id, courseId);
    dispatch(enrollStudent({ _id: "", user: currentUser._id, course: courseId }));
  };

  const handleUnenroll = async (courseId: string) => {
    await enrollmentsClient.unenrollFromCourse(currentUser._id, courseId);
    dispatch(unenrollStudent({ _id: "", user: currentUser._id, course: courseId }));
  };

  const filteredCourses =
    mode === "UNENROLL"
      ? courses.filter((course) => isEnrolled(course._id))
      : courses;

  // ✅ 初始化加载用户的 enrollment 数据
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
      {/* ✅ 顶部栏：标题 + 切换按钮 */}
      <div className="d-flex justify-content-between align-items-center">
        <h2 id="wd-dashboard-published">
          Published Courses ({filteredCourses.length})
        </h2>
        <div>
          <button
            className={`btn btn-sm me-2 ${mode === "ENROLL" ? "btn-primary" : "btn-outline-primary"}`}
            onClick={() => setMode("ENROLL")}
          >
            Enroll
          </button>
          <button
            className={`btn btn-sm ${mode === "UNENROLL" ? "btn-danger" : "btn-outline-danger"}`}
            onClick={() => setMode("UNENROLL")}
          >
            Unenroll
          </button>
        </div>
      </div>

      {/* ✅ 课程卡片 */}
      <div id="wd-dashboard-courses" className="row mt-3">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => (
            <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
              <div className="card rounded-3 overflow-hidden">
                <Link
                  to={`/Kambaz/Courses/${course._id}/Home`}
                  className="wd-dashboard-course-link text-decoration-none text-dark"
                >
                  {/* ✅ 图片 */}
                  <img src={course?.image ?? "/images/reactjs.jpg"} width="100%" height={160} />
                  <div className="card-body">
                    <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                    <p
                      className="wd-dashboard-course-title card-text overflow-y-hidden"
                      style={{ maxHeight: 100 }}
                    >
                      {course.description}
                    </p>
                    {/* ✅ Go 按钮 */}
                    <Link to={`/Kambaz/Courses/${course._id}/Home`} className="btn btn-primary">
                      Go
                    </Link>
                  </div>
                </Link>

  
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
