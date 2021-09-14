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
  const blog = () => {
    return history.push("/blog")
  }
  const support = () => {
    return history.push("/support")
  }
    return (
        <>
          <div className="generalContainer navContainer">
            <div className="nav-desktop">
              <div className="nav-logosec">
                <img src={logo} alt="internify logo" /><h2>INTERNIFY</h2>
              </div>
              <nav className="nav-itemswrap">
                <span onClick={blog}>Blog</span>
                <span>About</span>
                <span onClick={support}>Support</span>
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