import React, { Component } from 'react';

import NavBar from"./Navbar/Navbar.js"
import "./header.css"

class Header extends Component {
  render() {
    return (
      // <header
      //   placement="left"
      //   leftComponent={{ icon: 'menu', color: '#fff' }}
      //   centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
      //   rightComponent={{ icon: 'home', color: '#fff' }}
      // />
      <div>
      <NavBar/>
      </div>


    );
  }
}

export default Header;
