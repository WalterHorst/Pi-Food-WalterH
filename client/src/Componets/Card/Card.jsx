import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, Nombre, HealthScore }) => {
  return (
    <div className="Card">
      <Link to={`/detail/${id}`}>{Nombre}</Link>
      <p>HealthScore:{HealthScore}</p>
      <img src={image} alt={Nombre} />
    </div>
  );
};
export default Card;
