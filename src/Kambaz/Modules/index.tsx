import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import {
  addModule, editModule, updateModule, deleteModule,
  setModules, updateLesson, editLesson,deleteLesson
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../Courses/client";
import * as modulesClient from "./client";

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const saveModule = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };

  const removeModule = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };

  const createModuleForCourse = async () => {
    if (!cid) return;
    const newModule = { name: moduleName, course: cid };
    const module = await coursesClient.createModuleForCourse(cid, newModule);
    console.log("✅ Created module:", module);
    dispatch(addModule(module));
  };

  const addLesson = async (moduleId: string) => {
    const newLesson = {
      name: "New Lesson",
      description: "Lesson description",
    };
    const lesson = await modulesClient.addLessonToModule(moduleId, newLesson);
    const updatedModules = modules.map((m: any) =>
      m._id === moduleId
        ? { ...m, lessons: [...(m.lessons || []), lesson] }
        : m
    );
    dispatch(setModules(updatedModules));
  };

  const fetchModules = async () => {
    if (!cid) return;
    const modules = await coursesClient.findModulesForCourse(cid as string);
    console.log("✅ Fetched modules:", modules);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, []);

  useEffect(() => {
    console.log("🔄 Updated Redux modules:", modules);
  }, [modules]);

  return (
    <div className="container mt-3">
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={createModuleForCourse}
      />

      <div id="wd-modules" className="mt-4">
        {modules.map((module: any) => (
          <div key={module._id} className="mb-4 p-3 border rounded bg-light">
            <div className="d-flex align-items-center justify-content-between bg-secondary text-white p-2 rounded">
              <div className="d-flex align-items-center w-100">
                <BsGripVertical className="me-2 fs-3" />
                {!module.editing ? (
                  <span className="fw-bold flex-grow-1">{module.name}</span>
                ) : (
                  <input
                    className="form-control w-50 d-inline-block"
                    value={module.name}
                    onChange={(e) => dispatch(updateModule({ ...module, name: e.target.value }))}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        saveModule({ ...module, editing: false });
                      }
                    }}
                  />
                )}
              </div>
              <ModuleControlButtons
                moduleId={module._id}
                deleteModule={removeModule}
                editModule={() => dispatch(editModule(module._id))}
                addLesson={addLesson}
              />
            </div>

            {/* Lessons */}
            {module.lessons && module.lessons.length > 0 && (
              <div className="p-3 mt-2 border rounded bg-white">
                <h6 className="text-secondary">Lessons</h6>
                <ul className="list-group">
                  {module.lessons.map((lesson: any) => (
                    <li
                      key={lesson._id}
                      className="list-group-item d-flex justify-content-between align-items-center"
                    >
                      <div className="d-flex align-items-center w-100">
                        <BsGripVertical className="me-2 fs-4" />
                        {lesson.editing ? (
                          <input
                            className="form-control w-50"
                            value={lesson.name}
                            onChange={(e) =>
                              dispatch(updateLesson({
                                moduleId: module._id,
                                lessonId: lesson._id,
                                updates: { name: e.target.value },
                              }))
                            }
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                dispatch(updateLesson({
                                  moduleId: module._id,
                                  lessonId: lesson._id,
                                  updates: { editing: false },
                                }));
                              }
                            }}
                          />
                        ) : (
                          <span>{lesson.name}</span>
                        )}
                      </div>
                      <LessonControlButtons
                        onEdit={() =>
                          dispatch(editLesson({
                            moduleId: module._id,
                            lessonId: lesson._id
                          }))
                        }
                        onDelete={() => 
                          dispatch(deleteLesson({
                            moduleId: module._id,
                            lessonId: lesson._id }))
                        }
                      />
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
