import axios from "axios";

// const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER; 
const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER.replace(/\/+$/, "");
const COURSES_API = `${REMOTE_SERVER}/api/courses`;

const axiosWithCredentials = axios.create({
  withCredentials: true
});
export const createCourse = async (course: any) => {
  const { data } = await axiosWithCredentials.post(COURSES_API, course);
  return data;
};

export const fetchAllCourses = async() => {
    const { data } = await axiosWithCredentials.get(COURSES_API);
    return data;
}

export const deleteCourse = async(moduleId: string) => {
    const { data } = await axiosWithCredentials.delete(`${COURSES_API}/${moduleId}`);
    return data;
}

export const updateCourse = async(course: any) => {
    const { data } = await axiosWithCredentials.put(`${COURSES_API}/${course._id}`, course);
    return data;
}

export const createModuleForCourse = async(courseId: string, module: any) => {
    const response = await axiosWithCredentials.post(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
}

export const findModulesForCourse = async(courseId: string) => {
    const response = await axiosWithCredentials.get(`${COURSES_API}/${courseId}/modules`);
    return response.data;
}
export const findCoursesForCurrentUser = async () => {
    const token = localStorage.getItem('token'); // 或从 Redux store 获取
  
    const res = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/users/current/courses`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  
    return res.data;
};
export const findUsersForCourse = async (courseId: string) => {
  const response = await axios.get(`${COURSES_API}/${courseId}/users`);
  return response.data;
  };