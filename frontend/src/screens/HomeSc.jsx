import {Link} from "react-router-dom"
const HomeSc = ()=>{
    return(
        <div>
            <h1>Inicio</h1>
            <div>
                <Link to = "/agregarPersona">Agregar Persona</Link>
                <Link to= "/verPersonas">Ver Totalidad Personas</Link>
                <Link to="/eliminarPersona">Eliminar Persona</Link>
                <Link to="/actualizarPersona">Actualizar Persona</Link>
            </div>
        </div>
    );
}
export default HomeSc;