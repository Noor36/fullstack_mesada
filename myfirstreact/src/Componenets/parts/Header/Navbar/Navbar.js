import React, { Component } from 'react';
import { MenuItems } from "./menuItem.js";
import { useLocation } from "react-router-dom"
import "./Navbar.css";

// export async function getAllUsers() {
//   const response = await fetch('/localhost:8000/aboutUS/Ajson.json');
//   return await response.json();
// }

// class Navbar extends React.Components{
//   constructor() {
//     super();
//     this.state = { data: [] };
//   }
//   componentDidMount() {
//     fetch('/NavBar')
//       .then(res => res.json())
//       .then(json => this.setState({ data: json }));
//   }
//   render() {
//     const formComponents = this.state.data.map(item =>
//
      )

//   }
// }

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
