import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
  addLesson,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
  addLesson: (moduleId: string) => void;
}) {
  return (
    <div className="float-end d-flex flex-column align-items-end gap-1">
      {/* 第一行：Edit / Delete / Checkmark */}
      <div className="d-flex align-items-center gap-3">
        <FaPencil
          onClick={() => editModule(moduleId)}
          className="text-primary"
          style={{ cursor: "pointer", fontSize: "1.2rem" }}
        />
        <FaTrash
          onClick={() => deleteModule(moduleId)}
          className="text-danger"
          style={{ cursor: "pointer", fontSize: "1.2rem" }}
        />
        <div style={{ transform: "translateY(1px)" }}>
          <GreenCheckmark />
        </div>
      </div>

      {/* 第二行：Add / More */}
      <div className="d-flex align-items-center gap-3">
        <IoIosAdd
          onClick={() => addLesson(moduleId)}
          style={{ cursor: "pointer", fontSize: "1.5rem" }}
        />
        <IoEllipsisVertical
          className="fs-5"
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
