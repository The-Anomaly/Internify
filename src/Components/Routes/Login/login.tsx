import * as React from "react";
import "./login.css"
import "../Register/register.css"
import logo from "../../../assets/internifyLogo.png"
import { useHistory } from "react-router-dom";


const Login = () => {
    let history = useHistory();
    const register = () => {
        return history.push("/register")
    }
    return (
        <>
            <div className="register-wrap">
                <div className="register-info login-info">
                    <img className="register-info-img" src={logo} alt="" />
                    <h3 className="register-ttl">LOGIN TO INTERNIFY</h3>
                    <p className="register-txt">Not yet registered?  <span onClick={register}>Registered</span></p>
                    <form className="register-form">
                        <input className="internify-input register-input" type="text" placeholder="Username/Email:" />
                        <input className="internify-input register-input" type="password" placeholder="Password:" />
                        
                        <div className="register-form-btnsec">
                            <button className="appBtnFill">Signup</button>
                            <button className="appBtnOutline">Signin</button>
                        </div>
                    <p className="register-txt">Forgot Password? Click   <span onClick={register}>here</span></p>
                    </form>
                </div>
                <div className="register-img">

                </div>
            </div>
        </>
    )
}

export default Login;