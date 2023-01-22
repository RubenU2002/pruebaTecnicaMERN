import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AgregarPersona = ()=>{
    const navigate = useNavigate();
    const [idPersona,setIdPersona] = useState("");
    const [nombreCompleto,setNombreCompleto] = useState("");
    const [edad,setEdad] = useState("");
    const [fechaNacimiento,setFechaNacimiento] = useState("");
    const [fechaInscripcion,setFechaInscripcion] = useState("");
    const [costo,setCosto] = useState(0);

    const [fallo,setFallo] = useState(null);
    const calcularEdad=(fecha)=>{
        let hoy = new Date();
        let cumple = new Date(fecha);
        let edadCal = hoy.getFullYear()-cumple.getFullYear();

        let mes = hoy.getMonth()-cumple.getMonth();
        if(mes<0 || (mes === 0 && hoy.getDate()<cumple.getDate())){
            edadCal--;
        }
        return edadCal;
    }
    const calcularCosto =(costoDato,fechaInscrip)=>{
        let hoy = new Date();
        let inscrip = new Date(fechaInscrip);
        let anos = hoy.getFullYear()-inscrip.getFullYear();

        let mes = hoy.getMonth()-inscrip.getMonth();
        if(mes<0 || (mes === 0 && hoy.getDate()<inscrip.getDate())){
            anos--;
        }
        return anos*100;
    }

    const validarNombre = (nombre)=>{
        const valor =nombre.split(' ')
        .filter((n)=> n!= '').length;
        if(valor<2){
            return true;
        }else{
            return false;
        }
    }

    const handleSubmitFormulario = async(e)=>{
        e.preventDefault();
        const fallos = 0;
        if(calcularEdad(fechaNacimiento.toString())<18){
            alert("La edad es menor de 18 años")
            fallos=1;
        }
        if(calcularEdad(fechaNacimiento.toString())!=edad){
            alert("La edad no coincide con la fecha de nacimiento");
            fallos=1;
        }
        if(Date.parse(fechaInscripcion.toString())<Date.parse(fechaNacimiento.toString())){
            alert("La fecha de inscripcion es menor a la de nacimiento")
            fallos=1;
        }
        if(calcularCosto(costo,fechaInscripcion.toString())==costo){
            alert("El costo dado no coincide con los parametros de la empresa");
            fallos=1;
            console.log(fallo)
        }
        if(validarNombre(nombreCompleto)==true){
            alert("Tu nombre debe tener dos palabras minimo");
            fallos=1;
        }
        console.log(fallo);
        if(fallos==0){
            const {data} = await axios.post("http://localhost:3000/api/personas/create",{idPersona:idPersona,nombreCompleto:nombreCompleto,edad:edad,fechaNacimiento:fechaNacimiento.toString(),fechaInscripcion:fechaInscripcion,costo:costo});
            console.log("registrado",{data});
            alert("Registro exitoso");
        }
        setFallo(null);
    }


    return(
        <div>
            <h1>Agregar Persona</h1>
            <form onSubmit={handleSubmitFormulario}>
                <label htmlFor="idPersona">Id de la persona</label>
                    <input type="text" name = "idPersona" id="idPersona" onChange={(e)=>setIdPersona(e.target.value)}  required/>
                    <br />
                    <label htmlFor="nombreCompleto">Nombre * al menos nombre y apellido *</label>
                    <input type="text" name = "nombreCompleto" id="nombreCompleto" onChange={(e)=>setNombreCompleto(e.target.value)}/>
                    <br />
                    <label htmlFor="edad">edad</label>
                    <input type="number" min={18} name = "edad" id="edad" onChange={(e)=>setEdad(e.target.value)} required/>
                    <br />
                    <label htmlFor="fechaNacimiento">Fecha de nacimiento</label>
                    <input type="date" name = "fechaNacimiento" id="fechaNacimiento" onChange={(e)=>setFechaNacimiento(e.target.value)} required/>
                    <br />
                    <label htmlFor="fechaInscripcion">Fecha de inscripcion</label>
                    <input type="date" name = "fechaInscripcion" id="fechaInscripcion" onChange={(e)=>setFechaInscripcion(e.target.value)} required/>
                    <br />
                    <label htmlFor="costo">Costo</label>
                    <input type="number" name = "costo" id="costo" onChange={(e)=>setCosto(e.target.value)} required/>
                    <button>Registrar Nueva persona</button>
            </form>
                    <button onClick={()=>navigate("/")}> Volver atras</button>
        </div>
    )
}
export default AgregarPersona;