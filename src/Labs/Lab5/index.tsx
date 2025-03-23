import EnvironmentVariables from "./EnvironmentVariables";
import PathParameters from "./PathParameters";
import QueryParameters from "./QueryParameters";
import TodoList from "./TodoList";
import WorkingWithArraysAsynchronously from "./WorkingWithArraysAsynchronously";  // ✅ 修改这里




const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER; // ✅ 用 Vite 方式加载环境变量
console.log("VITE_APP_REMOTE_SERVER:", REMOTE_SERVER); // ✅ 检查是否正确加载

export default function Lab5() {
    return (
        <div id="wd-lab5">
            <h2>Lab 5</h2>
            <div className="list-group">
                <a href={`${REMOTE_SERVER}/lab5/welcome`} className="list-group=item">
                    <h2>Welcome</h2>
                </a>
            </div>
            <hr />
            <EnvironmentVariables /> <hr />
            <PathParameters /> <hr />
            <QueryParameters /> <hr />
            <TodoList /> <hr />
            <WorkingWithArraysAsynchronously />
        </div>
    );
}
