import { Switch, Route } from "react-router-dom";
import LeftBar from "./LeftBar";
import Main from "./Main";
import RightBar from "./RightBar";
import "./threecolumn.css";

const ThreeColumn = () => {
  return (
    <>
      <div className="threecolumn-container">
        <div className="leftbar-container">
          <LeftBar />
        </div>
        <div className="main-container">
          <Main />
        </div>
        <div className="rightbar-container">
          <RightBar />
        </div>
      </div>
    </>
  );
};
export default ThreeColumn;
