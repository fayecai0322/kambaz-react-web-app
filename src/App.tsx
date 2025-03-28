
import Kambaz from "./Kambaz" ;
import Labs from "./Labs";
import store from "./Kambaz/store";
import { Provider } from "react-redux";

import {Route, Routes, Navigate, HashRouter} from 'react-router';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export function App() {
 return (
  <HashRouter>
    <Provider store={store}>
      <div>
        <Routes>
        <Route path="/" element={<Navigate to="Kambaz"/>}/>
        <Route path="/Kambaz/*" element={<Kambaz />} />
        <Route path="/Labs/*" element={<Labs />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
   </Provider>
  </HashRouter>
);}
