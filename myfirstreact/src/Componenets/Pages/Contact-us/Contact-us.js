import "./Contact-us.css";

const ContactUs = () => {
  return (
    <div id="content" className="container">
      <h2 className="welcome">ברוך הבא, אנא מלא את הפרטים האלה על מנת לעזור לך</h2>
      <p></p>
      <p></p>
      <form action="/action_page.php" className="needs-validation" noValidate>
        <div className="form-group text-right">
          <label htmlFor="uname">שם מלא:</label>
          <input type="text" className="form-control" id="uname" placeholder="כתוב את שמך כאן" name="uname" required />
        </div>
        <div>
          <div className="form-group text-right">
            <label htmlFor="comment">התקלה:</label>
            <textarea className="form-control" rows="5" id="comment" name="text"></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">שלח</button>
      </form>
    </div>
  );
}

export default ContactUs;
