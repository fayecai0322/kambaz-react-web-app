import { BsGripVertical } from "react-icons/bs";
import ModuleControls from "./ModuleControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import * as db from "../../Database";
import { useParams } from "react-router";

export default function Modules(){
  const {cid} = useParams();
  const modules = db.modules;
  return(
    <div>
      {/*Module Controls */}
      <ModuleControls />
      <br /><br /><br />
      {/*Dynamic Modules from Database */}
      <ul id = "wd-modules" className="list-group rounded-0">
        {modules
         .filter((module:any) => module.course == cid)
         .map((module:any)=> (
          <li key={module.id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" /> {module.name}<ModuleControlButtons />
              </div>

              {/* Check if module has lessons */}
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson:any)=> (
                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons /></li>))}
                </ul>
              )}
           </li>

          ))}
        </ul>
    </div>
  );
}



      