const express = require('express')
const HeaderDB = require('./Headerdb')



module.exports.Header = async (req,res)=>{
  return(await HeaderDB.HeaderPages());
}


// module.exports.example=()=>{
//   res.json(Navbar())
// }

// module.exports.headerpages=()=>{
//   return (Header())
// }
// module.exports.HomePage = async.concat(['Navbar'],
//   function(err){
//     res.json(Navbar())
// });
