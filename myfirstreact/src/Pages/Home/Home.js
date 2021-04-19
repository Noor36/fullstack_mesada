import React from 'react';
import Header from '../../Componenets/Header/Header';
import Search from '../../Componenets/Search/Search';
import Content from '../../Componenets/Home/Content';
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Search />
        <Content />
      </React.Fragment>
    );
  }
}

export default Home;
