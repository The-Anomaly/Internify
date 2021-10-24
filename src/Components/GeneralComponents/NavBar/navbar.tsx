import * as React from "react";
import "./navbar.css";
import logo from "../../../assets/internifyLogo.png";
import searchicon from "../../../assets/vectors/searchIcon.svg";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import SideNav from "react-simple-sidenav";
import close from "../../../assets/vectors/burgerMenuClose.svg";

const NavBar = () => {
  let history = useHistory();
  const register = () => {
    return history.push("/register");
  };
  const login = () => {
    return history.push("/login");
  };
  const blog = () => {
    return history.push("/blog");
  };
  const support = () => {
    return history.push("/support");
  };
  const about = () => {
    return history.push("/about");
  };
  const home = () => {
    return history.push("/");
  };
  const faq = () => {
    return history.push("/faq");
  };
  const search = () => {
    return history.push("/search");
  };
  const [nav, setNav] = React.useState(false);
  const uniqueKeygen = (): number => {
    return Math.floor(Math.random() * 100);
  };
  return (
    <>
      <div className="navContainer">
        <div className="generalContainer">
          <div className="nav-desktop">
            <div role="button" onClick={home} className="nav-logosec">
              <img src={logo} alt="internify logo" />
              <h2>INTERNIFY</h2>
            </div>
            <nav className="nav-itemswrap">
              <span onClick={blog}>Blog</span>
              <span onClick={about}>About</span>
              <span onClick={support}>Support</span>
              <span onClick={faq}>FAQ</span>
            </nav>
            <div className="nav-btnsec">
              <img
                role="button"
                onClick={search}
                src={searchicon}
                alt="search icon"
              />
              <button onClick={login}>Login</button>
              <button onClick={register} className="appBtnFill ">
                Register
              </button>
            </div>
          </div>
          <div className="nav-mobile">
            <SideNav
              openFromRight={true}
              style={{ background: nav ? "transparent" : "inherit" }}
              navStyle={{ width: "80%", background: "#2a2e39" }}
              showNav={nav}
              onHideNav={() => setNav(false)}
              titleStyle={{
                backgroundColor: "#2a2e39",
                color: "#444444",
                paddingLeft: 10,
                paddingRight: 15,
                paddingBottom: 0,
                paddingTop: 0,
                fontSize: 17,
                textAlign: "left",
                height: 73,
              }}
              itemStyle={{
                backgroundColor: "#2a2e39",
                listStyleType: "none",
                color: "#fff",
                textAlign: "center",
                padding: "0 8px",
                marginBottom: "3.7rem",
              }}
              itemHoverStyle={{ backgroundColor: "inherit" }}
              title={[
                <div
                  key={uniqueKeygen()}
                  style={{
                    display: "flex",
                    justifyContent: "flex-end",
                    background: "#2a2e39",
                    padding: "8px 4px 1px 8px",
                    color: "#fff",
                    fontSize: "4rem",
                    cursor: "pointer",
                  }}
                >
                  <span onClick={() => setNav(!nav ? true : false)}>
                    <img
                      style={{ width: "35px" }}
                      src={close}
                      alt="close menu"
                    />
                  </span>
                </div>,
              ]}
              items={[
                <div role="button" onClick={blog}>Blog</div>,
                <div role="button" onClick={about}>About</div>,
                <div role="button" onClick={support}>Support</div>,
                <div role="button" onClick={faq}>FAQ</div>,
                <div role="button" onClick={search}>
                  <img src={searchicon} alt="search" />
                </div>,
                <div role="button" onClick={login}>Login</div>,
                <button onClick={register} className="appBtnFill nav-mobile-btn">Register</button>,
              ]}
            />
            <nav className="nav-ctrl">
              <Link to="/">
                <img className="nav-logo" src={logo} alt="internify logo" />
              </Link>
              <div
                className="nav-mobile-toggle"
                onClick={() => setNav(!nav ? true : false)}
              >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
