import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import DataTable from 'react-data-table-component';
import { defer } from "react-router-dom";
const VerPersonas = ()=>{
    const [totalPersonas, setTotalPersonas] = useState([]);
    const columns = [
        {
            name: 'idPersona',
            selector: row => row.idPersona,
        },
        {
            name: 'Nombre',
            selector: row => row.nombreCompleto,
        },
        ,
        {
            name: 'edad',
            selector: row => row.edad,
        },
        ,
        {
            name: 'fecha Nacimiento',
            selector: row => row.fechaNacimiento,
        },
        {
            name: 'fecha inscripcion',
            selector: row => row.fechaInscripcion,
        },
        {
            name: 'costo',
            selector: row =>row.costo
        }
    ]
    useEffect(()=>{
        axios.get("http://localhost:3000/api/personas/").then(resp =>setTotalPersonas(resp.data));
    })
    
    return(
        <div>
            {
                totalPersonas.length >0 ?
                <DataTable
                columns={columns}
                data={totalPersonas}
                /> : 
                <h1>No hay personas</h1>
            }
        </div>
    )
}
export default VerPersonas;