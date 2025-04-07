import axios from "axios";
interface Course {
    _id: string;
    name: string;
    number: string;
    startDate: string;
    endDate: string;
    description: string;
    department?: string;
    credits?: number;
    author?: string;
    image?: string;
}
// ✅ 创建带 cookie 的 axios 实例
const axiosWithCredentials = axios.create({
    withCredentials: true
});
export const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER; 
export const USERS_API = `${REMOTE_SERVER}/api/users`;
export const findAllUsers = async()=>{
    const response = await axiosWithCredentials.get(USERS_API);
    return response.data;
};
export const createUser = async (user: any) => {
    const response = await axios.post(`${USERS_API}`, user);
    return response.data;
};
export const signin = async (credentials: any) => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response.data;
};

export const signup = async (user: any): Promise<{ _id: string; username: string } | { error: string }> => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data as { _id: string; username: string } | { error: string };
};

export const updateUser = async(user: any)=> {
    const response = await axiosWithCredentials.put(`${USERS_API}/${user._id}`, user);
    return response.data;
}

export const profile = async() => {
    const response = await axiosWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
}

export const signout = async() => {
    const response = await axiosWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
}

export const findMyCourses = async() => {
    // const { data } = await axioWithCredentials.get(`${USERS_API}/${"current"}/courses`);
    const { data } = await axiosWithCredentials.get<Course[]>(`${USERS_API}/current/courses`);
    console.log("✅ Real courses from backend:", data);
    return data;
};

//Calls the /api/users/current/courses API to create a course
export const createCourse = async(course : any) => {
    const {data} = await axiosWithCredentials.post(`${USERS_API}/current/courses`,course);
    return data;
}

export const findCoursesForCurrentUser = async () => {
    const res = await axiosWithCredentials.get(`${REMOTE_SERVER}/api/users/current/courses`);
    return res.data;
  };

export const findUsersByRole = async(role: string) => {
    const response = await axios.get(`${USERS_API}?role=${role}`);
    return response.data;
};
export const findUsersByPartialName = async (name:string) =>{
    const response = await axios.get(`${USERS_API}?name=${name}`);
    return response.data;
};
export const findUserById = async (id: string) => {
    const response = await axios.get(`${USERS_API}/${id}`);
    return response.data;
};
export const deleteUser = async (userId: string) => {
    const response = await axiosWithCredentials.delete( `${USERS_API}/${userId}`);
    return response.data;
};