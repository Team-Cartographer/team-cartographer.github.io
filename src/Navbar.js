import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./Navbar.css"
import logo from './images/logo512.png'

export default function Navbar() {
  return (
    <nav className="nav">
      <img src={logo} alt="Team Cartographer Logo" className="navbar-logo" /> 
      <Link to="/team-cartographer-site" className="site-title">
        Team Cartographer
      </Link>
      <ul>
        <a href="https://github.com/Team-Cartographer">GitHub</a>
        <a href="https://www.linkedin.com/company/team-cartographer/">LinkedIn</a>
        <CustomLink to="/about">About</CustomLink>
        {/* FIXME: implement this <a href="/contact">Contact Us</a> */}
        <a href="mailto:teamcartographer@gmail.com">Contact Us</a>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}