import InfoCard from "../../Componenets/Info-Card/Info-Card"

const AboutUs = () => {
  return (
    <div id="content" className="container">
      <div className="row">
        <InfoCard className="card1" image="img/search.jpg" text="בחיפוש אתם יכולים לכתוב כל אזור שבא לכם ותחפשו את המסעדות בו." />
        <InfoCard className="car2" image="img/tmeca.jpg" text="בתמיכה טכנית, אתם מוזמנים לשלוח לנו כל טקלה שנפגשים בה." />
        <InfoCard className="car3" image="img/chat.jpg" text="בפורום אנחנו נשים בשבילכם את התגובות וההמלצות שלכם, ובנוסף תוכלו גם לראות המלצות לגבי תמיכה טכנית." />
        <InfoCard className="car4" image="img/aishi.jpg" text="באזור אישי שלכם תוכלו לשמור את המסעדות האהובות עליכם וכל מה שתרצו." />
    </div>
  </div>
  );
}

export default AboutUs
