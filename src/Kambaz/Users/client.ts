import axios from "axios";
import { User } from "./reducer";

// ✅ 创建一个带 credentials 的 axios 实例
const axioWithCredentials = axios.create({ withCredentials: true });

// ✅ 明确指定 response 类型是 { data: User[] }
export const fetchAllUsers = async (): Promise<User[]> => {
  const response = await axioWithCredentials.get<User[]>("/api/users");
  return response.data;
};