import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";

function NavLinks() {
  return (
    <ul className="nav-links">
      <NavLink to="/" exact>
        <li> All USERS</li>
      </NavLink>
      <NavLink to="/u1/places">
        <li> MY PLACES</li>
      </NavLink>
      <NavLink to="/places/new">
        <li> ADD PLACE</li>
      </NavLink>
      <NavLink to="/auth">
        <li> AUTHENTICATE</li>
      </NavLink>
    </ul>
  );
}

export default NavLinks;
