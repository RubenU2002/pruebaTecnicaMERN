import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";

const EliminarPersona = ()=>{
    const [idPersona,setIdPersona]= useState("");
    const navigate = useNavigate();
    const handleSubmit =async (e)=>{
        e.prevenDefault();
        try{
            const {data} = await axios.get(`http://localhost:3000/api/personas/delete/${idPersona}`);
            if(data.deletedCount>0){
                alert("Se elimino corectamente")
            }else{
                alert("o se encontro el plato con ese id");
            }
        }catch(err){
            alert("Ocurrio un error, reintentelo")
        }
    }
    return(
        <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="idPersona">Id de la persona</label>
                <input type="text" name = "idPersona" id="idPersona" onChange={(e)=>setIdPersona(e.target.value)}  required/>
        </form>
        <button onClick={()=>navigate("/")}>Volver atras</button>
        </>
    )
}
export default EliminarPersona;