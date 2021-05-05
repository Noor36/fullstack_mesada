import React, { Component } from 'react';
import {HomeCarousel} from '../../homeCarousel.js';
// import "./myCarousel.css";
import Carousel from '../../../../general/carousel/carousel.js'

class MyCarousel extends Component{
  constructor(props) {
      super(props)};
render(){

  return(
    <Carousel CarouselItems={HomeCarousel} />
  );
 }
}

export default MyCarousel
