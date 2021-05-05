
import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards.js';
import MyCarousel from './content/Mycarousel/mycarousel.js'
class ContentHome extends React.Component{

    render(){
        return(
            <div className="container">
              <Card />
              <Mycarousel />
            </div>
        )
    }
}
export default ContentHome;
