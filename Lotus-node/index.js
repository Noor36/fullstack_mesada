const express = require('express')
const app = express();
const port = 8000;
const aboutUs = require('./modules/pages/aboutUs/AboutUScontroller')
const home = require('./pages/home/homecontroller.js')
// const conjson = require('./modules/pages/contactUs/Cjson.json')
// let jsonData = require('./modules/pages/contactUs/Cjson.json');
//
// console.log(jsonData);

// console.log(conjson);
// app.get('/json', function (req, res) {
//   res.json(conjson)
// })


// GET method route
app.get('/home', home.Homepage)

app.get('/home', function (req, res) {
  res.send('home')
})
app.get('/AboutUS', function (req, res) {
  res.send('AboutUs')
})
app.get('/ContactUs', function (req, res) {
  res.send('ContactUs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});


// app.route('/book')
//   .get(function (req, res) {
//     console.log('Get a random book')
//   })
//   .post(function (req, res) {
//     console.log('Add a book')
//   })
//   .put(function (req, res) {
//     console.log('Update the book')
//   })

// GET method route
export async function getAllUsers() {
  const response = await fetch('/api/users');
  return await response.json();
}
