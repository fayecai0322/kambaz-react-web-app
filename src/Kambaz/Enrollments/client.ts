import axios from "axios";

export interface Enrollment {
  _id: string;
  user: string;
  course: string;
}

// export const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER;
export const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER.replace(/\/+$/, "");
const API = `${REMOTE_SERVER}/api/enrollments`;

// ✅ 创建带 withCredentials 的 axios 实例
const axiosWithCredentials = axios.create({
  withCredentials: true,
});

// ✅ 修改所有请求使用 axiosWithCredentials
export const enrollInCourse = async (userId: string, courseId: string) =>
  await axiosWithCredentials.post(API, { userId, courseId });

export const unenrollFromCourse = async (userId: string, courseId: string) =>
  await axiosWithCredentials.delete(`${API}/${userId}/${courseId}`);

export const findEnrollmentsByUser = async (userId: string): Promise<Enrollment[]> => {
  const response = await axiosWithCredentials.get<Enrollment[]>(`${API}/${userId}`);
  return response.data;


};
