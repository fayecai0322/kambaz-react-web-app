import { useEffect, useState } from "react";
import { fetchTodos, postTodo } from "./client";

// ✅ 定义 Todo 类型
interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

export default function TodoList() {
    // ✅ 确保 `todos` 只包含 `Todo[]`
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTask, setNewTask] = useState("");

    // ✅ 加载 todos，并确保 `fetchTodos()` 返回 `Todo[]`
    useEffect(() => {
        console.log("📢 Fetching Todos...");
        fetchTodos().then((data: Todo[]) => {
            console.log("✅ Todos received:", data);
            setTodos(data);
        }).catch(error => console.error("❌ Fetch error:", error));
    }, []);

    // ✅ 添加新 todo
    const addTodo = async () => {
        if (!newTask.trim()) return;
        const newTodo = { title: newTask, completed: false };

        const savedTodo = await postTodo(newTodo);

        if (!savedTodo) {
            console.error("❌ Error: postTodo() returned null.");
            return; // 🚨 防止 `null` 进入 `setTodos()`
        }

        setTodos([...todos, savedTodo]); // ✅ 只有 `Todo` 类型能进 `todos`
        setNewTask("");
    };

    return (
        <div>
            <h3>Todos</h3>
            <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="New Task"
            />
            <button onClick={addTodo}>➕ Add</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <input type="checkbox" checked={todo.completed} readOnly />
                        {todo.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}
