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
              to="/cart"
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              Cart
            </NavLink>
            <a href="https://www.twitter.com"> Twitter</a>

            <a href="https://wwww.fb.com">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
