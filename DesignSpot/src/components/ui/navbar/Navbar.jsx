import { Link, NavLink } from "react-router-dom";
import "../../../assets/css/navbar.css";

const Navbar = () => {
  return (
    <div className="mainNav">
      <div className="container">
        <div className="nav_container">
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/products"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Products
              </NavLink>
            </li>
          </ul>
          <div className="logo">
            <Link to="/">DesignSpot</Link>
          </div>
          <div className="components">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cart
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Twitter
            </NavLink>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Facebook
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
