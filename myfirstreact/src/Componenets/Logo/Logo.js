

const Logo = () => {
  return (
    <div id="logo" className="col-12">
      <img className="img-fluid" src="img/tmona.jpg"/>
      <form className="form-inline mr-5 col-3" action="/action_page.php">
           <input className="form-control mr-sm-2" type="text" id="keyWord" name="keyWord" placeholder="הכנס מילת מפתח" />
           <button className="btn btn-success" type="submit">חיפוש</button>
      </form>
      
    </div>
  );
}

export default Logo;
