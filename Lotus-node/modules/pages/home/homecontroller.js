const navbar = require("../general/navbar.json");
const express = require('express');
const router = express.Router();

let Carousel =()=> {
  return(carousel)
}

let Content=()=> {
  return JSON.parse('{"Carousel":'+JSON.stringify(Carousel())+'}')
}

let HomeJson=()=>{
  return JSON.parse('{"Content":'+JSON.stringify(Content())+', "Header":'+JSON.stringify(header)+',"Footer":'+JSON.stringify(footer)+'}')
}

module.exports.HomePage = (req, res)=>{
  res.json(HomeJson())
}
