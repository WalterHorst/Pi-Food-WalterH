import { Link } from "react-router-dom";
import "./Card.css";

const Card = ({ id, image, nombre, dietas }) => {
  return (
    <div className="Card">
      <Link to={`/detail/${id}`}>{nombre}</Link>
      <p>Tipo de dietas:{dietas}</p>
      <img src={image} alt={nombre} />
    </div>
  );
};
export default Card;
