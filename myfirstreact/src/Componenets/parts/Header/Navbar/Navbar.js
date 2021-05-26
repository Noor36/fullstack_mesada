import React, { Component } from 'react';
import { MenuItems } from "./menuItem.js";

import "./Navbar.css";



class NavBar extends Component{
  constructor(props){
    super(props);
  }

    render() {
      if (!this.props.data){
      return ("oops")
      };

      const items=this.props.data.map((singleItem)=>
        <li className={singleItem.cName} >
           <a className={singleItem.cLink} href={singleItem.url}>
              {singleItem.title}
           </a>
        </li>
      );
      return(
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
          <ul className="mynav navbar-nav col-8">
            {items}
          </ul>
        </nav>
      );
    }
}

export default NavBar;
