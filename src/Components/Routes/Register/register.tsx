import * as React from "react";
import "./register.css";
import logo from "../../../assets/internifyLogo.png";
import { useHistory } from "react-router";

const Register = () => {
  let history = useHistory();
  const login = () => {
    return history.push("/login");
  };
  const create = () => {
    return history.push("/cv/create");
  };
  return (
    <>
      <div className="register-wrap">
        <div className="register-info">
          <img className="register-info-img" src={logo} alt="" />
          <h3 className="register-ttl">REGISTER TO INTERNIFY</h3>
          <p className="register-txt">
            Already registered? <span onClick={login}>Login</span>
          </p>
          <form className="register-form">
            <input
              className="internify-input register-input"
              type="text"
              placeholder="Firstname:"
            />
            <input
              className="internify-input register-input"
              type="text"
              placeholder="Lastname:"
            />
            <input
              className="internify-input register-input"
              type="email"
              placeholder="E-mail:"
            />
            <input
              className="internify-input register-input"
              type="password"
              placeholder="Password:"
            />
            <input
              className="internify-input register-input"
              type="text"
              placeholder="Username:"
            />
            <div className="register-input-wrap">
              <label>
                State:
                <input type="text" className="internify-input" />
              </label>
              <label>
                City:
                <input type="text" className="internify-input" />
              </label>
            </div>
            <textarea
              className="internify-name register-textarea"
              placeholder="Address:"
            />
            <div className="register-dob-wrap">
              <p>Date of Birth:</p>
              <div>
                <input type="text" className="internify-input" />
                <input type="text" className="internify-input" />
                <input type="text" className="internify-input" />
              </div>
            </div>
            <div className="register-gender-wrap ">
              <p>Gender:</p>
              <div>
                <label>
                  <input type="radio" />
                  Male
                </label>
                <label>
                  <input type="radio" />
                  Female
                </label>
                <label>
                  <input type="radio" />
                  Other
                </label>
              </div>
            </div>
            <input
              className="internify-input register-input"
              type="text"
              placeholder="University"
            />
            <div className="register-upload-wrap">
              <label className="internify-input" htmlFor="picture">
                Upload Picture
              </label>
              <input id="picture" type="file" placeholder="Upload Picture" />
              <label htmlFor="cv" className="internify-input">
                Upload CV
              </label>
              <input id="cv" type="file" placeholder="Upload CV" />
            </div>
            <p className="register-txt register-form-txt">
              If you don’t have a CV, click{" "}
              <span role="button" onClick={create}>
                here
              </span>{" "}
              to create one
            </p>
            <label className="register-agreement">
              <input type="checkbox" />I agree to the Terms and Privacy Policy
            </label>
            <div className="register-form-btnsec">
              <button className="appBtnFill">Signup</button>
              <button className="appBtnOutline">Signin</button>
            </div>
          </form>
        </div>
        <div className="register-img"></div>
      </div>
    </>
  );
};

export default Register;
