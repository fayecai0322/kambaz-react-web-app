import { useSelector, useDispatch } from "react-redux";
import { enrollStudent, unenrollStudent } from "./Courses/Enrollments/reducer";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as db from "./Database";

// ✅ Define Course Type
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

// ✅ Define Props for Dashboard
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
  const [showAllCourses, setShowAllCourses] = useState(false);

  const isStudent = currentUser?.role === "Student";
  const isFaculty = ["FACULTY", "TA"].includes(currentUser?.role); // ✅ Supports TA role

  // ✅ Fix TypeScript Error: Explicitly set 'enrollment' type
  const filteredCourses = showAllCourses
    ? courses
    : courses.filter((course) =>
        enrollments.some((enrollment: any) =>
          enrollment.user === currentUser?._id && enrollment.course === course._id
        )
      );

  return (
    <div id="wd-dashboard" className="p-4">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({filteredCourses.length})
      </h2>

      {/* ✅ Show Enrollments Button for Students Only */}
      {isStudent && (
        <button
          onClick={() => setShowAllCourses(!showAllCourses)}
          className="btn btn-primary float-end mb-3"
        >
          {showAllCourses ? "Show My Courses" : "Enrollments"}
        </button>
      )}

      {/* ✅ Add New Course Section (Only for Faculty or TA) */}
      {isFaculty && (
        <>
          <h5>New Course ...</h5>
          <input
            value={course.name}
            className="form-control mb-2"
            onChange={(e) => setCourse({ ...course, name: e.target.value })}
          />
          <textarea
            value={course.description}
            className="form-control"
            onChange={(e) => setCourse({ ...course, description: e.target.value })}
          />
          <div className="mt-3">
            <button
              className="btn btn-primary float-end ms-2"
              id="wd-add-new-course-click"
              onClick={addNewCourse}
            >
              Add
            </button>
            <button
              className="btn btn-primary float-end"
              onClick={updateCourse}
              id="wd-update-course-click"
            >
              Update
            </button>
          </div>
        </>
      )}

      {/* ✅ Course List Section */}
      <div id="wd-dashboard-courses" className="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          {filteredCourses.map((course) => {
            const enrolled = enrollments.some(
              (enrollment: any) =>
                enrollment.user === currentUser?._id && enrollment.course === course._id
            );

            return (
              <div key={course._id} className="wd-dashboard-course col" style={{ width: "300px" }}>
                <div className="card rounded-3 overflow-hidden">
                  <Link
                    to={enrolled ? `/Kambaz/Courses/${course._id}/Home` : "#"}
                    className={`wd-dashboard-course-link text-decoration-none text-dark ${
                      !enrolled ? "disabled" : ""
                    }`}
                  >
                    {/* ✅ Ensure `image` is used properly */}
                    <img src={course?.image ?? "/images/reactjs.jpg"} width="100%" height={160} />
                    <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">{course.name}</h5>
                      <p
                        className="wd-dashboard-course-title card-text overflow-y-hidden"
                        style={{ maxHeight: 100 }}
                      >
                        {course.description}
                      </p>

                      {/* ✅ "Go" Button (Left) & Edit/Delete (Right) */}
                      <div className="d-flex justify-content-between align-items-center">
                        {/* ✅ "Go" Button (Left) */}
                        {enrolled && (
                          <Link
                            to={`/Kambaz/Courses/${course._id}/Home`}
                            className="btn btn-primary"
                          >
                            Go
                          </Link>
                        )}

                        {/* ✅ Faculty/TA: Edit & Delete (Right) */}
                        {isFaculty && (
                          <div>
                            <button
                              className="btn btn-warning btn-sm me-2"
                              onClick={(event) => {
                                event.preventDefault();
                                setCourse(course);
                              }}
                              id="wd-edit-course-click"
                            >
                              Edit
                            </button>
                            <button
                              className="btn btn-danger btn-sm"
                              onClick={(event) => {
                                event.preventDefault();
                                deleteCourse(course._id);
                              }}
                              id="wd-delete-course-click"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </div>

                      {/* ✅ Enroll / Unenroll Buttons (Students Only) */}
                      {isStudent && (
                        <button
                          className={`btn ${enrolled ? "btn-danger" : "btn-success"} w-100 mt-2`}
                          onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                            event.preventDefault();

                            if (enrolled) {
                              dispatch(
                                unenrollStudent({ user: currentUser._id, course: course._id })
                              );
                            } else {
                              dispatch(
                                enrollStudent({ user: currentUser._id, course: course._id })
                              );
                            }
                          }}
                        >
                          {enrolled ? "Unenroll" : "Enroll"}
                        </button>
                      )}
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
