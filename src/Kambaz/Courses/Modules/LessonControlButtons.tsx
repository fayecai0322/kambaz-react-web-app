import { IoEllipsisVertical } from "react-icons/io5";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";

export default function LessonControlButtons({
  onEdit,
  onDelete,
  onConfirm,
}: {
  onEdit: () => void;
  onDelete: () => void;
  onConfirm?: () => void;
}) {
  return (
    <div className="float-end d-flex align-items-center">
      <GreenCheckmark onClick={onConfirm}
/>
      {/* ✅ Dropdown anchored to the icon button */}
      <div className="dropdown ms-2">
        <button
          className="btn btn-link p-0 border-0"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <IoEllipsisVertical className="fs-4" />
        </button>
        <ul className="dropdown-menu dropdown-menu-end">
          <li>
            <button className="dropdown-item text-primary" onClick={onEdit}>
              <FaPencil className="me-2" /> Edit Lesson
            </button>
          </li>
          <li>
            <button className="dropdown-item text-danger" onClick={onDelete}>
              <FaTrash className="me-2" /> Delete Lesson
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
