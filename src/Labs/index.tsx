import { Provider } from "react-redux";
import store from "./store";

import Lab1 from "./Lab1";
import Lab2 from "./Lab2/Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import Lab5 from "./Lab5";

import { Route, Routes, Link } from "react-router-dom";
import TOC from "./TOC";

export default function Labs() {
  return (
    <Provider store={store}> {/* 让所有组件都能访问 Redux Store */}
      <div>
        <h1>Labs</h1>
        <TOC />
        <Routes>
          <Route path="/" element={<Lab1 />} />
          <Route path="Lab1" element={<Lab1 />} />
          <Route path="Lab2" element={<Lab2 />} />
          <Route path="Lab3/*" element={<Lab3 />} />
          <Route path="Lab4/*" element={<Lab4 />} />
          <Route path="Lab5/*" element={<Lab5 />} />
        </Routes>
        <Link className="wd-kambaz" to="/Kambaz"> Kambaz </Link>
      </div>
    </Provider>
  );
}
