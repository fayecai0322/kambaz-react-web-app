import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../Database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  modules: modules,
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }) => {
      const newModule = {
        _id: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
        description: module.description || "New Module Description",
      };
      state.modules = [...state.modules, newModule];
    },

    deleteModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.filter((m) => m._id !== moduleId);
    },

    editModule: (state, { payload: moduleId }) => {
      state.modules = state.modules.map((m) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },

    updateModule: (state, { payload: module }) => {
      state.modules = state.modules.map((m) =>
        m._id === module._id ? module : m
      );
    },

    // ✅ 添加新 lesson 到指定 module
    addLesson: (state, { payload }) => {
        const { moduleId, lesson } = payload;
        state.modules = state.modules.map((m: any) => {
          if (m._id === moduleId) {
            const newLesson = {
              _id: uuidv4(),
              name: lesson.name,
            };
            return {
              ...m,
              lessons: [...(m.lessons || []), newLesson],
            };
          }
          return m;
        });
      },

    // ✅ 编辑 lesson（进入编辑模式）
    editLesson: (state, { payload }) => {
        const { moduleId, lessonId } = payload;
        state.modules = state.modules.map((m: any) => {
          if (m._id === moduleId) {
            const updatedLessons = m.lessons.map((lesson: any) =>
              lesson._id === lessonId ? { ...lesson, editing: true } : lesson
            );
            return { ...m, lessons: updatedLessons };
          }
          return m;
        });
      },

    // ✅ 删除 lesson
    deleteLesson: (state, { payload }) => {
        const { moduleId, lessonId } = payload;
        state.modules = state.modules.map((m: any) => {
          if (m._id === moduleId) {
            const updatedLessons = m.lessons.filter((lesson: any) => lesson._id !== lessonId);
            return { ...m, lessons: updatedLessons };
          }
          return m;
        });
      },

    // ✅ 更新 lesson 内容并退出编辑模式
    updateLesson: (state, { payload }) => {
        const { moduleId, lessonId, name } = payload;
        state.modules = state.modules.map((m: any) => {
          if (m._id === moduleId) {
            const updatedLessons = m.lessons.map((lesson: any) =>
              lesson._id === lessonId ? { ...lesson, name, editing: false } : lesson
            );
            return { ...m, lessons: updatedLessons };
          }
          return m;
        });
      },
  },
});

export const {
  addModule,
  deleteModule,
  updateModule,
  editModule,
  addLesson,
  editLesson,
  deleteLesson,
  updateLesson,
} = modulesSlice.actions;

export default modulesSlice.reducer;
