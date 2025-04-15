import { FaPlus } from "react-icons/fa6";
import { useState } from "react";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (title: string) => void;
  addModule: () => void;
}) {
  const [showInput, setShowInput] = useState(false);

  return (
    <div id="wd-modules-controls" className="clearfix mb-3">
      {/* ✅ 保持原有 UI 样式 */}
      <button
        className="btn btn-lg btn-danger float-end"
        id="wd-add-module-btn"
        onClick={() => setShowInput(!showInput)}
      >
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </button>

      {/* ✅ 展开输入框（保持原样） */}
      {showInput && (
        <div className="float-end me-2 d-flex align-items-center" style={{ maxWidth: 400 }}>
          <input
            type="text"
            className="form-control me-2"
            placeholder="Enter module name"
            value={moduleName}
            onChange={(e) => setModuleName(e.target.value)}
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              addModule();
              setShowInput(false);
            }}
            disabled={!moduleName.trim()}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}
