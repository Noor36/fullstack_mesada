import React from 'react';
import Home from './Pages/Home/Home'
import AboutUs from './Pages/About-Us/About-us.js'
import ContactUs from './Pages/Contact-us/Contact-us.js'
import Header from "./Componenets/Header/Header.js"

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';

function App() {
  return (
    <React.Fragment >
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
             <Home />
           </Route>
           <Route exact path="/About-us">
              <AboutUs />
            </Route>
            <Route exact path="/Contact-us">
               <ContactUs />
           </Route>
        </Switch>
      </Router>
      {/*<Footer /> */}
    </React.Fragment>
  );
}

export default App;
