import "./Landing.css";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div>
      <div className="landing-Page">
        <header>
          <h1 className="parrafo1">Recetas de Comida</h1>
          <p className="parrafo2">Deliciosas recetas para todos los gustos</p>
        </header>
        <Link to={"/home"}>
          <button className="botonLanding">Entrar</button>
        </Link>
        <footer>
          <p className="parrafo2">Todos los derechos reservados &copy; 2023</p>
        </footer>
      </div>
    </div>
  );
};
export default Landing;
