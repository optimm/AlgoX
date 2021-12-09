import React from "react";
import Buttons from "./Buttons/Buttons";
import Sliders from "./Sliders/Sliders";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrayInput from "./Input/ArrayInput";
import "./Sidebar.css";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="controller-container">
        <div className="sort-btns-container">
          <Buttons />
        </div>
        {/* <div>
          <ArrayInput />
        </div> */}
        <div className="sliders-container">
          <Sliders />
        </div>
        <div className="github-logo-container">
          <GitHubIcon fontSize="large" />
          <a
            href="https://github.com/brijsiyag/Sorting-Visualizer"
            target="_blank"
            rel="noreferrer"
          >
            view repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
