import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ image, Nombre, HealthScore }) => {
  return (
    <div className="Card">
      <Link to={"/detail"}>{Nombre}</Link>
      <p>HealthScore:{HealthScore}</p>
      <img src={image} alt={Nombre} />
    </div>
  );
};
export default Card;
