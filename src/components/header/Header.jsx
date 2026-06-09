import { NavLink } from "react-router-dom";
import "./header.css";

export const Header = () => {
  return (
    <section className="header">
      <nav className="header-nav">
        <NavLink className="nav-text" to="/">
          Home
        </NavLink>

        <NavLink className="nav-text" to="/Movies">
          Movies
        </NavLink>
      </nav>
    </section>
  );
};
