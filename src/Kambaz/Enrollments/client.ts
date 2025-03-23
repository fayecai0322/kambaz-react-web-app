import axios from "axios";

export interface Enrollment {
    _id: string;
    user: string;
    course: string;
  }

const API = "/api/enrollments";

export const enrollInCourse = async (userId: string, courseId: string) =>
  await axios.post(API, { userId, courseId });

export const unenrollFromCourse = async (userId: string, courseId: string) =>
  await axios.delete(`${API}/${userId}/${courseId}`);

  export const findEnrollmentsByUser = async (userId: string): Promise<Enrollment[]> => {
    const response = await axios.get<Enrollment[]>(`${API}/${userId}`);
    return response.data;
  };