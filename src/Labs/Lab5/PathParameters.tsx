import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_APP_REMOTE_SERVER;

export default function PathParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");

  return (
    <div>
      <h3>Path Parameters</h3>

      {/* 输入框用于修改 a 和 b 的值 */}
      <input className="form-control mb-2" id="wd-path-parameter-a" 
        type="number" defaultValue={a} 
        onChange={(e) => setA(e.target.value)} 
      />
      <input className="form-control mb-2" id="wd-path-parameter-b" 
        type="number" defaultValue={b} 
        onChange={(e) => setB(e.target.value)} 
      />

      {/* 加法按钮，点击后访问 /lab5/add/:a/:b */}
      <a className="btn btn-primary me-2" id="wd-path-parameter-add"
        href={`${REMOTE_SERVER}/lab5/add/${a}/${b}`}>
        Add {a} + {b}
      </a>

      {/* 减法按钮，点击后访问 /lab5/subtract/:a/:b */}
      <a className="btn btn-danger" id="wd-path-parameter-subtract"
        href={`${REMOTE_SERVER}/lab5/subtract/${a}/${b}`}>
        Subtract {a} - {b}
      </a>
    </div>
  );
}
