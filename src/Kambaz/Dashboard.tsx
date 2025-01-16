import { Link } from "react-router-dom";
export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses">
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> 
                  CS1234 React JS 
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> 
                  CS1111 Course 3
            </Link>
            <p className="wd-dashboard-course-title">
              Course Three </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> 
                  CS4444 Course 4
            </Link>
            <p className="wd-dashboard-course-title">
              Course Four </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> 
                  CS5555 Course 5
            </Link>
            <p className="wd-dashboard-course-title">
              Full Stack software developer </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> 
                  CS6666 Course 6
            </Link>
            <p className="wd-dashboard-course-title">
              Course Six </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> 
                  CS7777 Course 7
            </Link>
            <p className="wd-dashboard-course-title">
              Course Seven </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
        <div className="wd-dashboard-course">
          <img src="/images/reactjs.jpg" width={200} />
          <div>
            <Link className="wd-dashboard-course-link"
                  to="/Kambaz/Courses/1234/Home"> 
                  CS8888 Course 8
            </Link>
            <p className="wd-dashboard-course-title">
              Course Eight </p>
            <Link to="/Kambaz/Courses/1234/Home"> Go </Link>
          </div>
        </div>
      </div>
    </div>
);}
