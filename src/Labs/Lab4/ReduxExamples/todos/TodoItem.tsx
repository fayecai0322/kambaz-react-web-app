import React from "react";

// ✅ Define Todo type
type Todo = {
    id: string;
    title: string;
};

// ✅ Define props for `TodoItem`
interface TodoItemProps {
    todo: Todo;
    deleteTodo: (id: string) => void;
    setTodo: (todo: Todo) => void;
}

export default function TodoItem({ todo, deleteTodo, setTodo }: TodoItemProps) {
    return (
        <li className="list-group-item">
            <button onClick={() => deleteTodo(todo.id)} id="wd-delete-todo-click">
                Delete
            </button>
            <button onClick={() => setTodo(todo)} id="wd-set-todo-click">
                Edit
            </button>
            {todo.title}
        </li>
    );
}


//处理单个任务项（包含删除、编辑按钮）