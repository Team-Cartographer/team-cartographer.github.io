import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from './images/logo512.png'
import Dropdown from "./components/Dropdown"

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Team Cartographer Logo" className="navbar-logo" /> 
      <Link to="/team-cartographer-site" className="site-title">
        Team Cartographer
      </Link>
      <Dropdown title="Links">
        <a href="https://github.com/Team-Cartographer">GitHub</a>
        <a href="https://www.linkedin.com/company/team-cartographer/">LinkedIn</a>
        <Link className="AboutUs" to="/team-cartographer-site/about">About Us</Link>
        <a href="mailto:teamcartographer@gmail.com">Contact Us</a>
      </Dropdown>
    </nav>
 )
}