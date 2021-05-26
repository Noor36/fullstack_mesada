const express = require('express');
const homecarousel= require('./homejson/carouselj.json');
const homecard= require('./homejson/cardj.json');
const header = require('../../parts/header/Headercontroller');
const db = require('../../../db.js');

let Carousel =()=>{
  return(homecarousel)
}
let Card =()=>{
  return(homecard)
}

let Content =()=>{
  return JSON.parse('{"Carousel":'+JSON.stringify(Carousel())+',"Card":'+JSON.stringify(Card())+'}')
}


module.exports.HomePageJson = async ()=>{
return JSON.parse('{"Header":'+JSON.stringify(await header.Header())+',"Content":'+JSON.stringify(Content())+'}')
}
