const generalDB = require('../../../db.js')
const navbar = require('./navbar.json');
let Navbar = async()=> {
  return await DB.DBquery("SELECT * FROM `menuitems`");
}

module.exports.HeaderPages= async ()=>{
  return JSON.parse('{"Navbar":'+JSON.stringify(await Navbar())+'}')
}
