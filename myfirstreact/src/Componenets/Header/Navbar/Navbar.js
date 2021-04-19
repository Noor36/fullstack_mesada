import React, { Component } from 'react';
import { MenuItems } from "./menuItem.js";
import { useLocation } from "react-router-dom"
import "./Navbar.css";

const NavBar =  () => {
    const loc = useLocation();
    return(
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <ul className="mynav navbar-nav col-8">
          {MenuItems.map((item, index) =>{
            return(
              <li key={index} className={loc.pathname == item.url ? "nav-item active" :  "nav-item"} >
                 <a className={item.cName} href={item.url}>
                    {item.title}
                 </a>
              </li>
            )
          })}
        </ul>
      </nav>
    );
}

export default NavBar;
