import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ Image, Nombre, HealthScore }) => {
  return (
    <div className="Card">
      <Link to={"/detail"}>Nombre:{Nombre}</Link>
      <p>HealthScore:{HealthScore}</p>
      <img src={Image} alt={Nombre} />
    </div>
  );
};
export default Card;
