import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER; 
const MODULES_API = `${REMOTE_SERVER}/api/modules`;

export const deleteModule = async(moduleId: string) => {
    const response = await axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
}

export const updateModule = async (module: any) => {
    const { data } = await axios.put(`${MODULES_API}/${module._id}`, module);
    return data;
};

export const addModule = async (courseId: string, module: any) => {
    const { data } = await axios.post(`/api/courses/${courseId}/modules`, module);
    return data;
};
export const addLessonToModule = async (moduleId: string, lesson: any) => {
    try {
      console.log("📤 Sending lesson to backend:", lesson);
      const response = await axios.post(`${MODULES_API}/${moduleId}/lessons`, lesson);
      console.log("✅ Lesson added:", response.data);
      return response.data;
    } catch (error) {
      console.error("❌ Failed to add lesson:", error);
      throw error;
    }
  };