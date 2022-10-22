import  promos  from "../imagenes/home/promos.png";
import "../stylesheets/HomeGeneral.css";
function HomePrevioPacientes() {
    return<>
    <div className="promos">
    <img
        className="imagenpromos"
        alt="promociones"
        src={promos}
    />

    </div>
    </>
}

export default HomePrevioPacientes;