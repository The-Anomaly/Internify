import * as React from "react";
import "./footer.css";
import "../NavBar/navbar.css";
import logo from "../../../assets/internifyLogo.png";
import facebook from "../../../assets/vectors/facebook.svg";
import instagram from "../../../assets/vectors/instagram.svg";
import linkedIn from "../../../assets/vectors/linkedIn.svg";
import twitter from "../../../assets/vectors/twitter.svg";
import youtube from "../../../assets/vectors/youtube.svg";

const Footer = () => {
  return (
    <>
      <footer className="footer generalContainer">
        <div className="footer-1">
          <div className="nav-logosec">
            <img src={logo} alt="internify logo" />
            <h2>INTERNIFY</h2>
          </div>
          <p className="footer-txt">
            :Internify Network is the first Nigerian System created to help
            Nigerian students get internship opportunities across Nigeria in
            different Nigerian Companies.
          </p>
        </div>
        <div className="footer-2">
          <p className="footer-2-txt">Follow Us:</p>
          <div className="footer-2-imgsec">
            <img src={facebook} alt="facebook icon" />
            <img src={instagram} alt="instagram icon" />
            <img src={linkedIn} alt="linkedIn icon" />
            <img src={twitter} alt="twitter icon" />
            <img src={youtube} alt="youtube icon" />
          </div>
        </div>
        <p className="footer-3">Copyright 2021</p>
      </footer>
    </>
  );
};

export default Footer;
