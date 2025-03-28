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
const axioWithCredentials = axios.create({withCredentials:true});
export const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER; 
export const USERS_API = `${REMOTE_SERVER}/api/users`;

export const signin = async (credentials: any) => {

    const response = await axioWithCredentials.post(`${USERS_API}/signin`, credentials);
    return response.data;
};
export const signup = async (user: any): Promise<{ _id: string; username: string } | { error: string }> => {
    const response = await axioWithCredentials.post(`${USERS_API}/signup`, user);
    return response.data as { _id: string; username: string } | { error: string };
};

// export const signup = async (user : any) => {
//     const response = await axios.post(`${USERS_API}/signup`, user);
//     return response.data;
// }

export const updateUser = async(user: any)=> {
    const response = await axioWithCredentials.put(`${USERS_API}/ ${user._id}`, user);
    return response.data;
}

export const profile = async() => {
    const response = await axioWithCredentials.post(`${USERS_API}/profile`);
    return response.data;
}

export const signout = async() => {
    const response = await axioWithCredentials.post(`${USERS_API}/signout`);
    return response.data;
}

export const findMyCourses = async() => {
    // const { data } = await axioWithCredentials.get(`${USERS_API}/${"current"}/courses`);
    const { data } = await axioWithCredentials.get<Course[]>(`${USERS_API}/current/courses`);
    console.log("✅ Real courses from backend:", data);

    //     // ✅ 确保至少返回一个测试数据
    // if (!data || data.length === 0) {
    //         console.warn("⚠️ No courses found for user, returning test data.");
    //         return [{
    //             _id: "RS101",
    //             name: "Rocket Propulsion",
    //             number: "RS4550",
    //             startDate: "2023-01-10",
    //             endDate: "2023-05-15",
    //             description: "This is for TEST",
    //         }];
    //     }
    return data;
};

//Calls the /api/users/current/courses API to create a course
export const createCourse = async(course : any) => {
    const {data} = await axioWithCredentials.post(`${USERS_API}/current/courses`,course);
    return data;
}