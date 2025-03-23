import axios from "axios";

// 获取 API 地址
const TODOS_API = import.meta.env.VITE_APP_REMOTE_SERVER;
console.log("🔍 TODOS_API:", TODOS_API);

// 定义 `Todo` 类型
export interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

// 获取 todos
export const fetchTodos = async (): Promise<Todo[]> => {
    try {
        const response = await axios.get<Todo[]>(`${TODOS_API}/lab5/todos`);
        console.log("✅ fetchTodos Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ fetchTodos() failed:", error);
        return [];
    }
};
//createTodo
export const createTodo = async (): Promise<Todo | null> => {
    try {
        const newTodo = { title: "New Task", completed: false };
        const response = await axios.post<Todo>(`${TODOS_API}/lab5/todos`, newTodo, {
            headers: { "Content-Type": "application/json" },
        });

        if (!response.data || !response.data.id) { // ✅ 确保 `response.data` 不是 `{}` 或 `null`
            console.error("❌ createTodo() failed: Invalid response", response.data);
            return null;
        }

        console.log("✅ createTodo Response:", response.data);
        return response.data; // ✅ 只返回有效的 `Todo`
    } catch (error) {
        console.error("❌ createTodo() failed:", error);
        return null; // 遇到错误时返回 `null`
    }
};

// ✅ `postTodo` 添加新 todo
export const postTodo = async (todo: Omit<Todo, "id">): Promise<Todo | null> => {
    try {
        const response = await axios.post<Todo>(`${TODOS_API}/lab5/todos`, todo, {
            headers: {
                "Content-Type": "application/json",  // 🚀 确保 `Content-Type`
            },
        });
        console.log("✅ postTodo Response:", response.data);
        return response.data;
    } catch (error) {
        console.error("❌ postTodo() failed:", error);
        return null;
    }
};

//deleteTodo
export const deleteTodo = async (id: number) => {
    try {
        const response = await axios.delete(`${TODOS_API}/lab5/todos/${id}`);
        return response.status === 200; // 确保返回的是布尔值
    } catch (error) {
        console.error("❌ deleteTodo() failed:", error);
        return false;
    }
};

//updateTod
export const updateTodo = async(todo: Todo) => {
    const response = await axios.put(`${TODOS_API}/${todo.id}`,todo);
    return response.data;
}