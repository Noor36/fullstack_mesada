import React, { Component } from 'react';

class Search extends Component {

  render() {
    return(

      <form className="form-inline mr-5 col-3" action="/action_page.php">
           <input className="form-control mr-sm-2" type="text" id="keyWord" name="keyWord" placeholder="הכנס מילת מפתח"/>
           <button className="btn btn-success" type="submit">חיפוש</button>
       </form>
    )
  }
}

export default Search;
