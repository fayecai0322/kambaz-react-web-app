import { useState, useRef, useEffect } from "react";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";

interface Props {
  lessonId?: string;
  onEdit?: (lessonId: string) => void;
  onDelete?: () => void;
}

export default function LessonControlButtons({ lessonId, onEdit, onDelete }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    console.log(`⚛️ LessonControlButtons rendered with lessonId prop: ${lessonId}`);
    const handleClickOutside = (event: any) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [lessonId]); // 监听 lessonId 的变化

  const handleEditClick = () => {
    console.log("🖱️ Edit button clicked in LessonControlButtons, current lessonId:", lessonId);
    if (lessonId) {
      onEdit?.(lessonId);
    } else {
      console.warn("⚠️ Lesson ID is undefined when Edit button clicked.");
    }
    setShowMenu(false); // 关闭菜单
  };

  return (
    <div
      className="position-relative d-flex align-items-center gap-2"
      ref={menuRef}
    >
      <GreenCheckmark />
      <button
        className="btn btn-sm btn-light"
        onClick={() => setShowMenu(!showMenu)}
      >
        <IoEllipsisVertical className="fs-5" />
      </button>
      {showMenu && (
        <div
          className="dropdown-menu show"
          style={{ position: "absolute", top: "100%", right: 0, zIndex: 10 }}
        >
          <button className="dropdown-item" onClick={handleEditClick}>
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