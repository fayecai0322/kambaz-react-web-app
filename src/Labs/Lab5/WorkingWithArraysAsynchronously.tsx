import { useEffect, useState } from "react";
import axios from "axios";
import { FaTrash, FaPlusCircle, FaEdit } from "react-icons/fa";
import { TiDelete } from "react-icons/ti";
import * as client from "./client";  

interface Todo {
    id: number;
    title: string;
    completed: boolean;
    editing?: boolean;
}

const TODOS_API = import.meta.env.VITE_APP_TODOS_API; // 读取环境变量

export default function TodoList() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);

    // ✅ 获取待办事项
    useEffect(() => {
        client.fetchTodos()
            .then((data: Todo[]) => setTodos(data))
            .catch((error) => console.error("Fetch error:", error));
    }, []);

    // ✅ 处理错误的公共方法
    const handleError = (error: any) => {
        if (error.response && error.response.data) {
            setErrorMessage(error.response.data.message);
        } else {
            setErrorMessage("An unexpected error occurred.");
        }
    };

    // ✅ 创建新任务
    const createTodo = async () => {
        try {
            const newTodo = await client.createTodo();
    
            if (!newTodo || !newTodo.id) { // 🚨 确保返回的是合法 `Todo`
                console.error("❌ createTodo failed: Invalid response", newTodo);
                return;
            }
    
            // ✅ 自动进入编辑模式
            setTodos([...todos, { ...newTodo, editing: true }]); 
    
        } catch (error) {
            console.error("❌ Create todo error:", error);
        }
    };

    // ✅ 发布新任务
    const postTodo = async () => {
        try {
            const newTodo = await client.postTodo({ title: "New Task", completed: false });
            if (newTodo) setTodos([...todos, newTodo]);
        } catch (error) {
            handleError(error);
        }
    };

    // ✅ 删除任务（后端 + 前端同步）
    const deleteTodo = async (todo: Todo) => {
        try {
            await client.deleteTodo(todo.id);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error) {
            handleError(error);
        }
    };

    // ✅ 仅在前端删除（不请求 API）
    const removeTodo = (todo: Todo) => {
        setTodos(todos.filter((t) => t.id !== todo.id));
    };

    // ✅ 切换任务完成状态，并同步到后端
    const toggleTodoCompletion = async (todo: Todo) => {
        try {
            const updatedTodo = { ...todo, completed: !todo.completed };
            await axios.put(`${TODOS_API}/todos/${todo.id}`, updatedTodo);
            setTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
        } catch (error) {
            handleError(error);
        }
    };

    // ✅ 进入编辑模式
    const startEditing = (todo: Todo) => {
        setTodos(todos.map((t) => (t.id === todo.id ? { ...t, editing: true } : t)));
    };

    // ✅ 实时更新 `title`（用于输入框）
    const handleEditChange = (todo: Todo, newTitle: string) => {
        setTodos(todos.map((t) => (t.id === todo.id ? { ...t, title: newTitle } : t)));
    };

    // ✅ 保存修改，并同步到后端
    const saveTitle = async (todo: Todo) => {
        console.log("🔍 Trying to update todo:", todo);
    
        if (!todo.id || isNaN(Number(todo.id))) {
            console.error("❌ Invalid ID:", todo.id);
            return;
        }
    
        const updatedTodo = { ...todo, editing: false };
    
        try {
            const response = await axios.put(`${TODOS_API}/todos/${todo.id}`, updatedTodo);
            console.log("✅ Update success:", response.data);
            setTodos(todos.map((t) => (t.id === todo.id ? updatedTodo : t)));
        } catch (error) {
            console.error("❌ Update error:", error);
        }
    };

    return (
        <div id="todo-app" className="container mt-3">
            <h3 className="mb-3">
            Working with Arrays Asynchronously
                {/*  在 UI 里显示错误信息 */}
                    {errorMessage && (
                        <div className="alert alert-danger mt-2">{errorMessage} </div>
                    )}

                <FaPlusCircle
                    onClick={createTodo}
                    className="text-success float-end fs-3 cursor-pointer border border-danger"
                    id="wd-create-todo"
                />
                <FaPlusCircle
                    onClick={postTodo}
                    className="text-primary float-end fs-3 cursor-pointer border border-danger"
                    id="wd-post-todo"
                />
            </h3>
            <ul className="list-group">
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item d-flex justify-content-between align-items-center">
                        {/* ✅ 左侧部分：复选框 + 标题/输入框 */}
                        <div className="d-flex align-items-center w-100">
                            {/* ✅ 复选框，切换 `completed` 状态 */}
                            <input
                                type="checkbox"
                                checked={todo.completed}
                                onChange={() => toggleTodoCompletion(todo)}
                                className="me-2"
                            />

                            {/* ✅ 如果是编辑模式，显示输入框；否则显示文本 */}
                            {todo.editing ? (
                                <input
                                    className="form-control w-50 float-start"
                                    value={todo.title} // ✅ 确保 `value` 正确绑定
                                    onChange={(e) => handleEditChange(todo, e.target.value)}
                                    onKeyDown={(e) => {
                                        if (e.key === "Enter") {
                                            e.preventDefault(); // ✅ 防止默认提交
                                            saveTitle(todo);
                                        }
                                    }}
                                    onBlur={() => saveTitle(todo)}
                                    autoFocus
                                />
                            ) : (
                                <span
                                    className={`me-auto ${todo.completed ? "text-muted text-decoration-line-through" : ""}`}
                                    onClick={() => startEditing(todo)} // ✅ 点击标题也能进入编辑
                                >
                                    {todo.title}
                                </span>
                            )}
                        </div>

                        {/* ✅ 右侧部分：编辑按钮 + 删除按钮 */}
                        <div className="d-flex align-items-center">
                            {!todo.editing && (
                                <FaEdit
                                    onClick={() => startEditing(todo)}
                                    className="text-primary cursor-pointer me-3"
                                />
                            )}
                            <TiDelete
                                onClick={() => removeTodo(todo)}
                                className="text-danger fs-4 cursor-pointer me-2"
                                id="wd-remove-todo"
                            />
                            <FaTrash
                                onClick={() => deleteTodo(todo)}
                                className="text-danger fs-4 cursor-pointer"
                                id="wd-delete-todo"
                            />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
