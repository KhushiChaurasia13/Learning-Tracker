import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">

      <NavLink className="navbar-brand" to="/">
        📚 Tracker
      </NavLink>

      <div className="ms-auto d-flex gap-3">

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-warning text-decoration-none" : "text-white text-decoration-none"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/topics"
          className={({ isActive }) =>
            isActive ? "text-warning text-decoration-none" : "text-white text-decoration-none"
          }
        >
          Topics
        </NavLink>

      </div>
    </nav>
  );
};

export default Navbar;