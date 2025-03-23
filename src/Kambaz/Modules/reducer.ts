import { createSlice } from "@reduxjs/toolkit";
// import { modules } from "../Database";
import { v4 as uuidv4 } from "uuid";

// ✅ 定义 Module 类型
interface Module {
    _id: string;
    lessons: any[];
    name: string;
    course: string;
    description: string;
}

const initialState : {modules: Module[]} = {
    // modules: modules,
    modules: [],
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules:(state,action)=>{
            console.log("🔄 Setting modules in Redux:", action.payload); // Debugging
            state.modules = action.payload;
        },
        addModule: (state, { payload: module }) => {
            const newModule = {
                _id: uuidv4(),
                lessons: [], // ✅ Keep empty lessons array
                name: module.name,
                course: module.course,
                description: module.description || "New Module Description", // ✅ Add a default description
            };
            state.modules = [...state.modules, newModule];
        },
        
        deleteModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.filter((m) => m._id !== moduleId);
        },
        updateModule: (state, { payload: module }) => {
            state.modules = state.modules.map((m) =>
                m._id === module._id ? module : m
            );
        },
        editModule: (state, { payload: moduleId }) => {
            state.modules = state.modules.map((m) =>
                m._id === moduleId ? { ...m, editing: true } : m
            );
        },
        updateLesson: (state, { payload }) => {
            const { moduleId, lessonId, updates } = payload;
            state.modules = state.modules.map((m) => {
              if (m._id === moduleId) {
                return {
                  ...m,
                  lessons: m.lessons.map((lesson: any) =>
                    lesson._id === lessonId ? { ...lesson, ...updates } : lesson
                  ),
                };
              }
              return m;
            });
          },
          editLesson: (state, { payload }) => {
            const { moduleId, lessonId } = payload;
            state.modules = state.modules.map((m) => {
              if (m._id === moduleId) {
                return {
                  ...m,
                  lessons: m.lessons.map((lesson: any) =>
                    lesson._id === lessonId
                      ? { ...lesson, editing: true }
                      : { ...lesson, editing: false }
                  ),
                };
              }
              return m;
            });
          },
          deleteLesson: (state, { payload }) => {
            const { moduleId, lessonId } = payload;
            state.modules = state.modules.map((module) => {
              if (module._id === moduleId) {
                return {
                  ...module,
                  lessons: module.lessons.filter((lesson: any) => lesson._id !== lessonId),
                };
              }
              return module;
            });
          },
    },
});

// ✅ Make sure this line exists:
export const { addModule, deleteModule, updateModule, editModule, setModules, updateLesson,editLesson, deleteLesson } = modulesSlice.actions;
export default modulesSlice.reducer;
