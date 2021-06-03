import {NavLink} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
              <NavLink to= "/login" className="nav-link">Login</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to= "/login" className="nav-link">Public</NavLink>
          </li>
          <li className="nav-item">
              <NavLink to= "/login" className="nav-link">Dashboard</NavLink>
          </li>
        </ul>

      </nav>
    )
}
