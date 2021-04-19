

const InfoCard = ({ className, image, text }) => {
  const classString = "col-3" + " " + className
  return (
    <div className={classString}>
      <img className="card-img-top1" src={image} alt="Card image"/>
      <div className="card-body">
        <p className="card-text">{text}</p>
        <a href="#" className="stretched-link"></a>
      </div>
    </div>
  );
}


export default InfoCard;
