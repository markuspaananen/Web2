import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [responsive, setResponsive] = useState(false);

  const toggleMenu = () => {
    setResponsive(!responsive);
  };

  const getClass = ({ isActive }) => isActive ? "active" : "";

  return (
    <div className={responsive ? "topnav responsive" : "topnav"} id="myTopnav">
      
      <NavLink to="/" end className={getClass}>Koti</NavLink>
      <NavLink to="/projektit" className={getClass}>Projektit</NavLink>
      <NavLink to="/yhteystiedot" className={getClass}>Yhteystiedot</NavLink>
      <NavLink to="/yleinen" className={getClass}>Yleinen</NavLink>

      <a href="#" className="icon" onClick={toggleMenu}>
        <i className="fa fa-bars"></i>
      </a>

      <h1>Markus Paananen</h1>
    </div>
  );
}