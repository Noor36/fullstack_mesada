
import React from 'react';
import ReactDOM from 'react-dom';
import Carousela from '../../../general/carousel/carousel.js';
import MyCard from './card/Mycard.js';

class ContentHome extends React.Component{
  constructor(props){
      super(props);
  }
    render(){
        return(
            <div className="container">
              <Carousela data={this.props.data}/>
              <MyCard/>
            </div>
        )
    }
}
export default ContentHome
