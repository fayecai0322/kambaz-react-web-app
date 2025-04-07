import { Route, Routes, Navigate } from "react-router";
import { useSelector } from "react-redux";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import Calendar from "./Calendar";
import Inbox from "./Inbox";
import "./styles.css";
// import * as db from "./Database";  
import { useEffect, useState } from "react"; 
// import { v4 as uuidv4 } from "uuid";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
// import * as client from "./Courses/client";
import * as userClient from "./Account/client";
import * as courseClient from "./Courses/client";


export default function Kambaz() {
    console.log("Kambaz Loaded!");

    const [courses, setCourses] = useState<any[]>([]);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const fetchCourses = async() => {
      try{
        // const courses  = (await userClient.findMyCourses()) as any[];
        const courses = await courseClient.fetchAllCourses() as any[];
        setCourses(courses);
      }catch(error){
        console.error(error);
      }
    };
    useEffect(()=> {
      fetchCourses();
    },[currentUser]);

    const [course, setCourse] = useState<any>({
        _id: "1234",
        name: "New Course",
        number: "New Number",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        description: "New Description",
    });
    //Calls createCourse() when a user submits a new course
    //Updates the courses state to instantly reflect the change in the UI
    const addNewCourse = async() => {
      const newCourse = await userClient.createCourse(course);
      setCourses([...courses, newCourse]);
    };
    //Sends a request to delete the course from the backend
    const deleteCourse = async(courseId: string) => {
      try {
        const status = await courseClient.deleteCourse(courseId);
        if (status === 204) { // 如果后端成功删除
          setCourses(courses.filter((course) => course._id !== courseId));
        } else {
          console.error("Failed to delete course");
        }
      } catch (error) {
        console.error("Error deleting course:", error);
      }
    };

    const updateCourse = async() => {
      await courseClient.updateCourse(course);
      setCourses(
          courses.map((c) => (c._id === course._id ? course : c))
      );
    };

    return (
      <Session>
        <div id="wd-kambaz">
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
                <Routes>
                    <Route path="/" element={<Navigate to="Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route
                        path="/Dashboard"
                        element={
                            <ProtectedRoute>
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    fetchAllCourses={fetchCourses}
                                />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/Courses"
                        element={
                            <ProtectedRoute>
                                <Dashboard
                                    courses={courses}
                                    course={course}
                                    setCourse={setCourse}
                                    addNewCourse={addNewCourse}
                                    deleteCourse={deleteCourse}
                                    updateCourse={updateCourse}
                                    fetchAllCourses={fetchCourses}
                                />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="/Courses/:cid/*" element={<Courses courses={courses} />} />
                    <Route path="/Calendar" element={<Calendar />} />
                    <Route path="/Inbox" element={<Inbox />} />
                </Routes>
            </div>
        </div>
        </Session>
    );
}
