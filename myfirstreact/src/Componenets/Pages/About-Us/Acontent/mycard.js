import React, { Component } from 'react';
import {CardsItems} from './aboutCards';
import Cards from '../Home/content/Cards.js'


class MyCard extends Component{
  constructor(props) {
      super(props)};
render(){

  return(
    <Cards CardsItems={Cards} />
  );
 }
}

export default MyCard;
