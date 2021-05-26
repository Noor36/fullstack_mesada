import React, { Component } from 'react';
import {CardItems} from './carditems.js';
// import "./myCarousel.css";
import Cards from '../../../../general/cardem/Cards.js';


class MyCard extends Component{
  constructor(props) {
      super(props)};
render(){

  return(
    <div>
      <Cards CardItems={CardItems} />
    </div>
  );
 }
}

export default MyCard;
