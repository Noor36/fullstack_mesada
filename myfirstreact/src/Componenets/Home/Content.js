import Logo from "../Logo/Logo";
import Carousel from "../Carousel/Carousel"
import Card from "../Card/Card";

const Content = () => {
  return (
    <div id="content" className="container">
      <Logo />

      <Carousel />

      <div className="row">
      <Card image="img/mecdonalds.jpg" className="card1" name="מקדונלדס" text="תזמינו עכשיו" linkText="לסניפי מקדונלדס" />
      <Card image="img/cafe.jpg" className="card2" name="בתי קפה" text="יעל" linkText="לבתי קפה" />
      <Card image="img/condetorya.jpg" className="card3" name="קונדיטוריות" text="הקינוח הכי טעים" linkText="לצפיה בממתקים" />

        </div>
        </div>
  )
}
export default Content
