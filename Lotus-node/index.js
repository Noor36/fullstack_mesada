const express = require('express');
const app = express();
const port = 8000;

// const login = require('./modules/pages/login/Logincontroller');
const home = require('./modules/pages/home/homecontroller.js');
// const aboutus = require('./modules/pages/aboutUs/AboutUScontroller.js');
// const contactus = require('./modules/pages/contactUs/ContacttUscontroller');
// const forum = require('./modules/pages/forum/Forumcontroller');
// const private = require('./modules/pages/private/Privatecontroller.js');
const test = require('./db')

// GET method route
app.get('/home', home.HomePage)
// app.get('/about(us)?', aboutus.AboutusPage)
// app.get('/contact(us)?', contactus.ContactusPage)
// app.get('/login', login.LoginPage)
// app.get('/forum', forum.ForumPage)
// app.get('/private', private.PrivatePage)

// app.get('/test', test.test)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
