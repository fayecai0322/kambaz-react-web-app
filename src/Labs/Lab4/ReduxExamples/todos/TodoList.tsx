import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoList() {
    const todos = useSelector((state: any) => state.todosReducer.todos); // ✅ Get todos from Redux state
    const todo = useSelector((state: any) => state.todosReducer.todo); // ✅ Get current todo from Redux state
    const dispatch = useDispatch();

    return (
        <div id="wd-todo-list-redux">
            <h2>Todo List</h2>
            <ul className="list-group">
                {/* ✅ Use Redux dispatch instead of local state */}
                <TodoForm 
                    todo={todo}
                    setTodo={(todo) => dispatch(setTodo(todo))}
                    addTodo={(todo) => dispatch(addTodo(todo))}
                    updateTodo={(todo) => dispatch(updateTodo(todo))}
                />
                {todos.map((todo: { id: string; title: string }) => (
                    <TodoItem
                        key={todo.id} // ✅ Add unique key to avoid React warnings
                        todo={todo}
                        deleteTodo={(id) => dispatch(deleteTodo(id))}
                        setTodo={(todo) => dispatch(setTodo(todo))}
                    />
                ))}
            </ul>
            <hr />
        </div>
    );
}
