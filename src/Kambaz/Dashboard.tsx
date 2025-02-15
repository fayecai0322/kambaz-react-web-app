import { Link } from "react-router-dom";
import {FaRegEdit} from "react-icons/fa";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className ="row">
        <div className="row row-cols-1 row-cols-md-5 g-4">
          <div className="wd-dashboard-course col" style={{width:"300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-non text-dark"
                  to="/Kambaz/Courses/1234/Home"> 
                   <img src="/images/reactjs.jpg" width="100%" height={160} />
                   <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS5610 Web Development </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Full Stack software developer </p>
                        <FaRegEdit className="fs-4 text-primary" />
                    </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{width:"300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-non text-dark"
                  to="/Kambaz/Courses/1234/Home"> 
                   <img src="/images/reactjs.jpg" width="100%" height={160} />
                   <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS5002 Introduction </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Intro of Computer Science </p>
                        <FaRegEdit className="fs-4 text-primary" />
                    </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{width:"300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-non text-dark"
                  to="/Kambaz/Courses/1234/Home"> 
                   <img src="/images/reactjs.jpg" width="100%" height={160} />
                   <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS5003 iOS Development </h5>
                      <p className="wd-dashboard-course-title card-text">
                          iOS Development </p>
                        <FaRegEdit className="fs-4 text-primary" />
                    </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{width:"300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-non text-dark"
                  to="/Kambaz/Courses/1234/Home"> 
                   <img src="/images/reactjs.jpg" width="100%" height={160} />
                   <div className="card-body">
                      <h5 className="wd-dashboard-course-title  card-title">
                        CS5004 Front End </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Intro of Front End </p>
                      <FaRegEdit className="fs-4 text-primary" />
                    </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{width:"300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-non text-dark"
                  to="/Kambaz/Courses/1234/Home"> 
                   <img src="/images/reactjs.jpg" width="100%" height={160} />
                   <div className="card-body">
                      <h5 className="wd-dashboard-course-title  card-title">
                        CS5005 Database Management </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Database Management </p>
                      <FaRegEdit className="fs-4 text-primary" />
                    </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{width:"300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-non text-dark"
                  to="/Kambaz/Courses/1234/Home"> 
                   <img src="/images/reactjs.jpg" width="100%" height={160} />
                   <div className="card-body">
                      <h5 className="wd-dashboard-course-title  card-title">
                        CS5006 Cloud Computing </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Intro of Cloud </p>
                      <FaRegEdit className="fs-4 text-primary" />
                    </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{width:"300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-non text-dark"
                  to="/Kambaz/Courses/1234/Home"> 
                   <img src="/images/reactjs.jpg" width="100%" height={160} />
                   <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title">
                        CS5007 Internship </h5>
                      <p className="wd-dashboard-course-title card-text">
                          Internship </p>
                      <FaRegEdit className="fs-4 text-primary" />
                    </div>
              </Link>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{width:"300px"}}>
            <div className="card rounded-3 overflow-hidden">
              <Link className="wd-dashboard-course-link text-decoration-non text-dark"
                  to="/Kambaz/Courses/1234/Home"> 
                   <img src="/images/reactjs.jpg" width="100%" height={160} />
                   <div className="card-body">
                      <h5 className="wd-dashboard-course-title card-title card-text">
                        CS5008 Final Course </h5>
                      <p className="wd-dashboard-course-title">
                          Final Course </p>
                      <FaRegEdit className="fs-4 text-primary" />
                    </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
       
);}
