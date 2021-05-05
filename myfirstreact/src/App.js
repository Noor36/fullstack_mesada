import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Componenets/Pages/Home/Home.js';
import Contactus from './Componenets/Pages/Contact-us/Contact-us.js';
class App extends React.Component{
  render() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
           <Route path="/" component={Home} exact/>
           <Route path="/aboutus" component={Aboutus}/>
           <Route path="/contactus" component={Contactus}/>
         </Switch>
      </div>
    </BrowserRouter>
  );
}
}
export default App;
