import { FaCheckCircle, FaCircle } from "react-icons/fa";

export default function GreenCheckmark() {
  return (
    <div className="position-relative d-inline-block" style={{ width: "24px", height: "24px" }}>
      <FaCircle className="text-white position-absolute top-0 start-0 fs-4" />
      <FaCheckCircle className="text-success position-absolute top-0 start-0 fs-4" />
    </div>
  );
}
