import "./index.css";
import Borders from "./Borders";
import Padding from "./Padding"; 
import Margins from "./Margins";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import { Relative, Absolute, Fixed } from "./Positions";
import Zindex from "./Zindex";
import Float from "./Float";
import GridLayout from "./GridLayout";
import Flex from "./Flex";
import ReactIconsSampler from "./ReactIcons";
import BootstrapGrids from "./BootstrapGrids";
import BoostrapTable from "./BoostrapTable";
import BoostrapLists from "./BoostrapLists";
import BootstrapForms from "./BootstrapForms";
import BootstrapNavigation from "./BootstrapNavigation";

export default function Lab2(){
  return (
    <div className="container">
      <h2> Lab 2 -Cascading Style Sheets</h2>
      <h3> Styling with the STYLE attribute</h3>
      <p> establish the root of your HTML document providing a basis of default styles such as the overall
margins, paddings, and font of your document. There are two main classes that control container elements</p>
      <div id="wd-css-background-colors">
        <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
          <p className="wd-bg-color-red wd-fg-color-black">
          This background of this paragraph is red but
          <span className="wd-bg-color-green wd-fg-color-white">
          the background of this text is green and the foreground white
          </span></p>
        <Borders />
        <Padding />
        <Margins />
        <Corners />
        <Dimensions />
        <Relative />
        <Absolute />
        <Fixed />
        <Zindex />
        <Float />
        <GridLayout />
        <Flex />
        <ReactIconsSampler />
        <BootstrapGrids />
        <BoostrapTable />
        <BoostrapLists />
        <BootstrapForms />
        <BootstrapNavigation />
      </div>
    </div>
  );
}