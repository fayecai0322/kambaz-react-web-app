import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import * as db from "../../Database";
import { useParams } from "react-router";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const [moduleName, setModuleName] = useState("");
  const dispatch = useDispatch();

  return (
    <div className="container mt-3">
      {/* ✅ Module Controls */}
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />

     {/* ✅ Organized Modules */}
     <div id="wd-modules" className="mt-4">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (
            <div key={module._id} className="mb-4 p-3 border rounded bg-light">
              {/* Module Title & Controls */}
              <div className="d-flex align-items-center justify-content-between bg-secondary text-white p-2 rounded">
                <div className="d-flex align-items-center w-100">
                  <BsGripVertical className="me-2 fs-3" />
                  
                  {/* ✅ Prevent Shrinking on Edit Mode */}
                  {!module.editing && <span className="fw-bold flex-grow-1">{module.name}</span>}
                  
                  {module.editing && (
                    <input
                      className="form-control w-100" // ✅ Ensures Full Width
                      autoFocus
                      onChange={(e) =>
                        dispatch(updateModule({ ...module, name: e.target.value }))
                      }
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          dispatch(updateModule({ ...module, editing: false }));
                        }
                      }}
                      defaultValue={module.name}
                      style={{ minWidth: "200px" }} // ✅ Prevents Shrinking
                    />
                  )}
                </div>

                {/* ✅ Control Buttons */}
                <div>
                  <ModuleControlButtons
                    moduleId={module._id}
                    deleteModule={() => dispatch(deleteModule(module._id))}
                    editModule={() => dispatch(editModule(module._id))}
                  />
                </div>
              </div>

              {/* Lessons Container */}
              {module.lessons && module.lessons.length > 0 && (
                <div className="p-3 mt-2 border rounded bg-white">
                  <h6 className="text-secondary">Lessons</h6>
                  <ul className="list-group">
                    {module.lessons.map((lesson: any) => (
                      <li
                        key={lesson._id}
                        className="list-group-item d-flex justify-content-between align-items-center"
                      >
                        <div className="d-flex align-items-center">
                          <BsGripVertical className="me-2 fs-4" />
                          {lesson.name}
                        </div>
                        <LessonControlButtons />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
}