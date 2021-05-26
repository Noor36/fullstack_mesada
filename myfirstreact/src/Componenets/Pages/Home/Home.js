import React from 'react';
import './Home.css';
import Header from '../../parts/Header/Header';
import ContentHome from './content/Content.js';
import Footer from '../../parts/Footer/Footer.js';
class Home extends React.Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  componentDidMount() {
    fetch('/home')
      .then(res => res.json())
      .then(json => this.setState({ data: json }));
  }

  render(){
    if (this.state.data.length===0)
        return (<p>ops</p>);
    console.log(this.state.data.Header.Navbar)

    return (
      <div id = "home">
      <Header data = {this.state.data.Header.Navbar}/>
      <center><img imgsrc='/img/restuarantsmesada.jpg'/></center>
      <ContentHome data={this.state.data.Content.Carousel}/>
      // <Footer data = {this.state.data.footer}/>

        //<ContentHome/>
        <Footer/>
      </div>
    );
  }
}

export default Home
