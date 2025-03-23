import { useState, useRef, useEffect } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

interface Props {
  onEdit?: () => void;
  onDelete?: () => void;
}

export default function LessonControlButtons({ onEdit, onDelete }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // 点击外部关闭 dropdown
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="position-relative d-flex align-items-center gap-2"
      ref={menuRef}
    >
      {/* ✅ Checkmark 独立显示 */}
      <GreenCheckmark />

      {/* More button 独立显示 */}
      <button
        className="btn btn-sm btn-light"
        onClick={() => setShowMenu(!showMenu)}
      >
        <IoEllipsisVertical className="fs-5" />
      </button>

      {/* Dropdown menu */}
      {showMenu && (
        <div
          className="dropdown-menu show"
          style={{ position: "absolute", top: "100%", right: 0, zIndex: 10 }}
        >
          <button className="dropdown-item" onClick={onEdit}>
            ✏️ Edit
          </button>
          <button className="dropdown-item text-danger" onClick={onDelete}>
            🗑️ Delete
          </button>
        </div>
      )}
    </div>
  );
}
