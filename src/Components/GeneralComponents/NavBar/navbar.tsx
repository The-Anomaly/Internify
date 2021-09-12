import * as React from "react"
import "./navbar.css"
import logo from "../../../assets/internifyLogo.png"
import search from "../../../assets/vectors/searchIcon.svg"

const NavBar = () => {
    return (
        <>
          <div className="generalContainer navContainer">
            <div className="nav-desktop">
              <div className="nav-logosec">
                <img src={logo} alt="internify logo" /><h2>INTERNIFY</h2>
              </div>
              <nav className="nav-itemswrap">
                <span>Blog</span>
                <span>About</span>
                <span>Support</span>
                <span>FAQ</span>
              </nav>
              <div className="nav-btnsec">
                <img src={search} />
                <button>Login</button>
                <button className="appBtnFill ">Register</button>
              </div>
          </div></div>
        </>
    )
}

export default NavBar;