import axios from "axios";

// const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER; 
const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER.replace(/\/+$/, "");
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

// ✅ 创建带 withCredentials 的 axios 实例
const axiosWithCredentials = axios.create({
  withCredentials: true,
});


export const deleteModule = async(moduleId: string) => {
    const response = await axiosWithCredentials.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
}

export const updateModule = async (module: any) => {
    const { data } = await axiosWithCredentials.put(`${MODULES_API}/${module._id}`, module);
    return data;
};

export const addModule = async (courseId: string, module: any) => {
    const { data } = await axiosWithCredentials.post(`/api/courses/${courseId}/modules`, module);
    return data;
};
export const addLessonToModule = async (moduleId: string, lesson: any) => {
    try {
      console.log("📤 Sending lesson to backend:", lesson);
      const response = await axiosWithCredentials.post(`${MODULES_API}/${moduleId}/lessons`, lesson);
      console.log("✅ Lesson added:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Failed to add lesson:", error);
      throw error;
    }
  };
  export const updateLesson = async (moduleId: string, lessonId: string, updates: any) => {
    const { data } = await axiosWithCredentials.put(
      `${MODULES_API}/${moduleId}/lessons/${lessonId}`,
      updates
    );
    return data;
  };