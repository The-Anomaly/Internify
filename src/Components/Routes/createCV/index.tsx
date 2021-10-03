import * as React from "react";
import "./styles.css";
import logo from "../../../assets/internifyLogo.png";
import Footer from "../../GeneralComponents/Footer/footer";

const Create = () => {
  return (
    <>
      <div className="createContainer generalContainer">
        <img className="createLogo" src={logo} alt="internify logo" />
        <h1 className="createTtl">INTERNIFY</h1>
        <p className="createTxt">Create your CV</p>
        <div className="createInputWrapSec">
          <label className="createInputWrap">
            <span>Firstname:</span>{" "}
            <input className="internify-input fullWidth" />
          </label>
          <label className="createInputWrap">
            <span>Lastname:</span>{" "}
            <input className="internify-input fullWidth" />
          </label>
          <label className="createInputWrap">
            <span>Date of Birth:</span>
            <div className="fullWidth dobInputWrap">
              {" "}
              <input className="internify-input" />
              <input className="internify-input" />
              <input className="internify-input" />
            </div>
          </label>
          <label className="createInputWrap">
            <span>Course:</span> <input className="internify-input fullWidth" />
          </label>
          <label className="createInputWrap">
            <span>Educational Background:</span>{" "}
            <textarea className="internify-input fullWidth createTextarea" />
          </label>
          <label className="createInputWrap">
            <span>Skills:</span>{" "}
            <input className="internify-input btnInput longInput" />
            <button className="createAdd">+</button>
          </label>
          <label className="createInputWrap nextWrap">
            <span>Programming Language:</span>
            <label className="createSwitch">
              <input type="checkbox" />
              <span className="createSlider round"></span>
            </label>
            <input className="internify-input btnInput longInput" />
            <button className="createAdd">+</button>
          </label>
          <label className="createInputWrap nextWrap">
            <span>Work Experience:</span>
            <label className="createSwitch">
              <input type="checkbox" />
              <span className="createSlider round"></span>
            </label>
            <div className="internify-input btnInput longInput workInputWrap">
              <label>
                <span>Company:</span> <input className="internify-input" />
              </label>
              <label>
                <span>Duration:</span> <input className="internify-input" />
              </label>
              <label>
                <span>Role:</span> <input className="internify-input" />
              </label>
            </div>
            <button className="createAdd">+</button>
          </label>

          <label className="createInputWrap">
            <span>Achievements:</span>{" "}
            <input className="internify-input btnInput longInput" />
            <button className="createAdd">+</button>
          </label>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Create;
