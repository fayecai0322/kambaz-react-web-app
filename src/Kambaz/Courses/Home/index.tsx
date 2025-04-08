import Modules from "../../Modules";
import CourseStatus from "./Status";

export default function Home() {
  const modulesStyle = {
    width: '95%', // 设置宽度
    maxWidth: '1400px', // 设置最大宽度
    marginRight: 'auto',
    marginLeft: 'auto',
  };

  return (
    <div className="d-flex" id="wd-home">
      <div style={modulesStyle}>
        <Modules />
      </div>
      <div className="d-none d-md-block">
        <CourseStatus />
      </div>
    </div>
  );
}