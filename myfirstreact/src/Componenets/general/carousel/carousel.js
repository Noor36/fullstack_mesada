import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItems from '../../Pages/Home/HomeCarousel.js'
import './carousel.css'

class Carousela extends React.Component{
  constructor(props) {
      super(props)};
render(){
  console.log(this.props.data);
  if (!this.props.data){
      return ("oops")
    };

return(
  <div id="carousel">
    <Carousel>
        {this.props.data.map((item)=>{
          return(
            <Carousel.Item interval={1000}>
              <center><img src={item.imgsrc}/></center>
            </Carousel.Item>
          )})}
    </Carousel>
  </div>

  );
 }
}

export default Carousela
