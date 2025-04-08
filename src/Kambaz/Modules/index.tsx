import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import { useParams } from "react-router";
import { useState, useEffect } from "react";
import {
  addModule, editModule, updateModule, deleteModule,
  setModules, updateLesson, deleteLesson
} from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../Courses/client";
import * as modulesClient from "./client";

interface Lesson {
  _id: string;
  name: string;
  description?: string;
  editing?: boolean;
}

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const saveModule = async (module: any) => {
    if (!module._id) {
      console.error("❌ Missing module ID, cannot save.");
      return;
    }
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
    dispatch(addModule(module));
  };

  const addLesson = async (moduleId: string) => {
    const newLesson = { name: "New Lesson", description: "Lesson description" };
    const lesson = await modulesClient.addLessonToModule(moduleId, newLesson);
    const updatedModules = modules.map((m: any) =>
      m._id === moduleId
        ? { ...m, lessons: [...(m.lessons || []), lesson] }
        : m
    );
    dispatch(setModules(updatedModules));
  };

  const handleUpdateLesson = async (
    moduleId: string,
    lessonId: string,
    updates: any
  ) => {
    try {
      const updatedLesson = await modulesClient.updateLesson(moduleId, lessonId, updates);
      dispatch(updateLesson({
        moduleId,
        lessonId,
        updates: updatedLesson,
      }));
    } catch (error) {
      console.error("❌ Failed in updating lesson:", error);
    }
  };

  const fetchModules = async () => {
    if (!cid) return;
    const modules = await coursesClient.findModulesForCourse(cid as string);
    dispatch(setModules(modules));
  };

  useEffect(() => {
    fetchModules();
  }, []);

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
            {module.lessons?.length > 0 && (
              <div className="p-3 mt-2 border rounded bg-white">
                <h6 className="text-secondary">Lessons</h6>
                <ul className="list-group">
                  {module.lessons.map((lesson: Lesson) => {
                    console.log("➡️ Current lesson in map:", lesson);
                    console.log("➡️ lesson._id in map:", lesson._id);
                    return (
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
                                handleUpdateLesson(module._id, lesson._id, { name: e.target.value })
                              }
                              onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                  handleUpdateLesson(module._id, lesson._id, { editing: false });
                                }
                              }}
                            />
                          ) : (
                            <span>{lesson.name}</span>
                          )}
                        </div>
                        <LessonControlButtons
                          lessonId={lesson._id}
                          onEdit={async (currentLessonId: string) => {
                            console.log("🔥 onEdit in index.tsx called with currentLessonId:", currentLessonId);
                            console.log("🔥 Calling modulesClient.updateLesson with moduleId:", module._id, "and lessonId:", currentLessonId);
                            try {
                              const updatedLesson = await modulesClient.updateLesson(
                                module._id,
                                currentLessonId,
                                { editing: true }
                              );
                              console.log("✅ modulesClient.updateLesson successful, updatedLesson:", updatedLesson);
                              fetchModules(); // ✅ 重新获取最新状态
                            } catch (err) {
                              console.error("❌ Cannot edit lesson:", err);
                            }
                          }}
                          onDelete={() =>
                            dispatch(deleteLesson({
                              moduleId: module._id,
                              lessonId: lesson._id
                            }))
                          }
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}