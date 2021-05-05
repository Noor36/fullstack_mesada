import React from 'react';
import ContentHome from './Content.js'
import './Home.css';

class Home extends React.Component {
  render() {
    return (
      <div className = "container">
      <ContentHome />
      </div>
    );
  }
}

export default Home;
