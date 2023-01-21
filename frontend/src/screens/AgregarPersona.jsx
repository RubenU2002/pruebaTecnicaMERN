import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AgregarPersona = ()=>{
    const navigate = useNavigate();
    const [idPersona,setIdPersona] = useState("");
    const [nombreCompleto,setNombreCompleto] = useState("");
    const [edad,setEdad] = useState("");
    const [fechaNacimiento,setFechaNacimiento] = useState("");
    const [fechaInscripcion,setFechaInscripcion] = useState("");
    const [costo,setCosto] = useState(0);

    const handleSubmitFormulario = async(e)=>{
        
    }


    return(
        <div>
            <h1>Agregar Persona</h1>
            <form onSubmit={handleSubmitFormulario}>
                <label htmlFor="idPersona">Id de la persona</label>
                    <input type="text" name = "idPersona" id="idPersona" onChange={(e)=>setIdPersona(e.target.value)}/>
                    <label htmlFor="nombreCompleto">Nombre * al menos nombre y apellido *</label>
                    <input type="text" name = "nombreCompleto" id="nombreCompleto" onChange={(e)=>setNombreCompleto(e.target.value)}/>
                    <label htmlFor="edad">edad</label>
                    <input type="number" name = "edad" id="edad" onChange={(e)=>setEdad(e.target.value)}/>
                    <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                    <input type="date" name = "fechaNacimiento" id="fechaNacimiento" onChange={(e)=>setFechaNacimiento(e.target.value)}/>
                    <label htmlFor="fechaInscripcion">Fecha de inscripcion</label>
                    <input type="text" name = "fechaInscripcion" id="fechaInscripcion" onChange={(e)=>setFechaInscripcion(e.target.value)}/>
                    <label htmlFor="costo">Nombre * al menos nombre y apellido *</label>
                    <input type="number" name = "costo" id="costo" onChange={(e)=>setCosto(e.target.value)}/>
            </form>
        </div>
    )
}
export default AgregarPersona;