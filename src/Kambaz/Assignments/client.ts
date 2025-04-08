import axios from "axios";

const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER.replace(/\/+$/, "");
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;
// ✅ 创建带 withCredentials 的 axios 实例
const axiosWithCredentials = axios.create({
  withCredentials: true,
});


export const fetchAssignmentsForCourse = async (courseId: string) => {
  try {
    console.log("📡 Fetching assignments for course:", courseId);
    const { data } = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/assignments`);
    console.log("✅ Assignments fetched:", data);
    return data;
  } catch (error) {
    console.error("❌ Failed to fetch assignments:", error);
    throw error;
  }
};

export const createAssignment = async (courseId: string, assignment: any) => {
  try {
    console.log("📤 Creating assignment for course:", courseId, assignment);
    const { data } = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/assignments`, assignment);
    console.log("✅ Assignment created:", data);
    return data;
  } catch (error) {
    console.error("❌ Failed to create assignment:", error);
    throw error;
  }
};

export const updateAssignment = async (assignment: any) => {
  try {
    console.log("✏️ Updating assignment:", assignment);
    const { data } = await axiosWithCredentials.put(`${ASSIGNMENTS_API}/${assignment._id}`, assignment);
    console.log("✅ Assignment updated:", data);
    return data;
  } catch (error) {
    console.error("❌ Failed to update assignment:", error);
    throw error;
  }
};

export const deleteAssignment = async (assignmentId: string) => {
  try {
    console.log("🗑️ Deleting assignment:", assignmentId);
    await axiosWithCredentials.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    console.log("✅ Assignment deleted:", assignmentId);
  } catch (error) {
    console.error("❌ Failed to delete assignment:", error);
    throw error;
  }
};