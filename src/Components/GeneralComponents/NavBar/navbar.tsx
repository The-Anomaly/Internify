import * as React from "react"
import "./navbar.css"
import logo from "../../../assets/internifyLogo.png"
import search from "../../../assets/vectors/searchIcon.svg"
import { useHistory } from "react-router"

const NavBar = () => {
  let history = useHistory()
  const register = () => {
    return history.push("/register")
  }
  const login = () => {
    return history.push("/login")
  }
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
                <button onClick={login}>Login</button>
                <button onClick={register} className="appBtnFill ">Register</button>
              </div>
          </div></div>
        </>
    )
}

export default NavBar;