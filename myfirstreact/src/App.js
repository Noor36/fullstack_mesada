import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Componenets/Pages/Home/Home.js';
// import Contactus from './Componenets/Pages/Contact-us/Contact-us.js';
// import About from './Componenets/Pages/About-Us/AboutUs.js';
class App extends React.Component{
  render() {
  return (
    <BrowserRouter>
      <main>
          <Switch>
           <Route path="/" component={Home} exact/>
         </Switch>
      </main>
    </BrowserRouter>
  );
}
}
export default App
