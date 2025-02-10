import {Link, useParams} from "react-router-dom";

export default function CoursesNavigation(){
    const {cid} = useParams(); //get course ID from URL params

    
    //define the course navigation links
    const links = [
        { label: "Home", path: "Home" },
        { label: "Modules", path: "Modules" },
        { label: "Piazza", path: "Piazza" },
        { label: "Zoom", path: "Zoom" },
        { label: "Assignments", path: "Assignments" },
        { label: "Quizzes", path: "Quizzes" },
        { label: "Grades", path: "Grades" },
        { label: "People", path: "People" }
    ];
    return(
        <div id="wd-courses-navigation" className="wd list-group fs-5 rounded-0">
            {links.map(({label,path})=>(
                <Link 
                key={path}
                to={`/Kambaz/Courses/${cid}/${path}`} //it will goes to /Kambaz/Courses/1234/Home
                className={`list-group-item border border-0 ${location.pathname.includes(path) ? "active text-white bg-danger" : "text-danger"}`}>
                    {label}
                </Link>
            ))}
            
        </div>
    );
            
}