import * as React from "react";
import "./styles.css";
import logo from "../../../assets/internifyLogo.png";

const Preview = () => {
  return (
    <div className="previewContainer">
      <div className="previewContainer1">
        <h5 className="previewTtl1">EXPERIENCE</h5>
        <div className="experience1">
          <p className="previewTxt1">2017 - present</p>
          <p className="previewTxt2">Aito Tech</p>
          <p className="previewTxt3">Backend Engineer</p>
          <p className="previewTxt4">
            The different workspaces will be assigned specific server endpoints,
            allowing you to easily preview files in all of your workspaces.
          </p>
        </div>
        <div className="experience1">
          <p className="previewTxt1">2017 - present</p>
          <p className="previewTxt2">Aito Tech</p>
          <p className="previewTxt3">Backend Engineer</p>
          <p className="previewTxt4">
            The different workspaces will be assigned specific server endpoints,
            allowing you to easily preview files in all of your workspaces.
          </p>
        </div>
        <h4 className="previewTtl2">SKILLS</h4>

        <ul className="previewList">
          <li>Leadership</li>
          <li>Communication</li>
          <li>Scheduling</li>
          <li>Risk Management</li>
          <li>Cost Management</li>
          <li>Negotiating</li>
        </ul>
        <p className="previewBottom">
          Created by <span>Internify</span>
          <img src={logo} alt="logo" />
        </p>
      </div>
      <div className="previewContainer2">
          <h2 className="previewTtl3 previewMarg">JOHN</h2>
          <h2 className="previewTtl3 previewLargeText">SMITH</h2>
          <p className="previewTtl4">SOFTWARE ENGINEER</p>
          <h5 className="previewTtl5">ABOUT</h5>
          <p>The different workspaces will be assigned specific server endpoints, allowing you to easily preview files in all of your workspaces. The different workspaces will be assigned specific server endpoints, allowing you to easily preview files in all of your workspaces.</p>
          <h5 className="previewTtl5 bottomMarg">EDUCATION</h5>
            <div className="previewEdu">
                <p className="previewTxt1">2010 - 2015</p>
                <p className="previewTxt2">Masters in Enginnering</p>
                <p className="previewTxt3">Babcock Univeristy</p>
            </div>
            <div className="previewEdu">
                <p className="previewTxt1">2010 - 2015</p>
                <p className="previewTxt2">Masters in Enginnering</p>
                <p className="previewTxt3">Babcock Univeristy</p>
            </div>
            <div className="previewEdu">
                <p className="previewTxt1">2010 - 2015</p>
                <p className="previewTxt2">Masters in Enginnering</p>
                <p className="previewTxt3">Babcock Univeristy</p>
            </div>
      </div>
    </div>
  );
};

export default Preview;
