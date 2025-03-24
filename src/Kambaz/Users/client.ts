import axios from "axios";
import { User } from "./reducer";

// 明确指定 response 类型是 { data: User[] }
export const fetchAllUsers = async (): Promise<User[]> => {
  const response = await axios.get<User[]>("/api/users");
  return response.data;
};