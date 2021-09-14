import * as React from "react";
import "./support.css";
import NavBar from "../../GeneralComponents/NavBar/navbar";
import Footer from "../../GeneralComponents/Footer/footer";
import support from "../../../assets/images/supportImg.png";

const Support = () => {
  return (
    <>
      <NavBar />
      <div className="supportWrap generalContainer">
        <div className="support-info">
          <h1 className="support-info-ttl">SUPPORT <span>INTERNIFY</span></h1>
          <p className="support-info-txt">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est
            recusandae dolor, magni debitis architecto quia, omnis culpa
            similique facere iure voluptatum laudantium iste officia itaque
            harum vel facilis. Doloribus, quos.
          </p>
          <form className="support-info-form">
            <h3 className="support-info-form-ttl">
              To Support by donating please fill in the form below.
            </h3>
            <input
              className="support-input internify-input"
              type="text"
              placeholder="Firstname:"
            />
            <input
              className="support-input internify-input"
              type="text"
              placeholder="Lastname:"
            />
            <button className="support-btn appBtnFill">Pay Now</button>
          </form>
        </div>
        <img className="support-img" src={support} alt="" />
      </div>
      <Footer />
    </>
  );
};

export default Support;
