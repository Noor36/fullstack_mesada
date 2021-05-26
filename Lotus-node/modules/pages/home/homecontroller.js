const homedb = require('./Homedb.js')

module.exports.HomePage = (req, res) => {
  res.json(homedb.HomePageJson());
}






















// const express = require('express');
// const router = express.Router();
// const carousel = require('./carouselj.json');
// const navbar = require('../general/navbar.json');
// const card = require('./cardj.json')
// const concat = require('async/concat');
// const header = require('../../parts/header/Headercontroller.js')
//
// router.use(function timeLog (req, res, next) {
//   console.log('Time: ', Date.now())
//   next()
// })
//
// let Carousel =()=> {
//   return(carouselhome)
// }
// let Card=()=> {
//   return(cardhome)
// }
//
// let HomeJson=()=>{
//   return JSON.parse('{"Content":'+JSON.stringify(Content())+', "Header":'+JSON.stringify(header)+',"Footer":'+JSON.stringify(footer)+'}')
// }
//
// module.exports.HomePage =()=>{
//   res.json(header.example)
// }
// concat(['Carousel', 'Card'],
//   function(err,function(req, res)){
//     let FinalJson="{Carousel:"+JSON.stringify(Carousel)+",Card:"+JSON.stringify(Card)+"}"
//     res.json(JSON.parse(FinalJson))
// });
