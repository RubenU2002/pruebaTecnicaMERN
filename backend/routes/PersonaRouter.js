import express from "express";
import persona from "../models/Persona";

const PersonaRoutes = express.Router();

PersonaRoutes.get("/",async(req,res)=>{
    const personas = persona.find({});
    res.send(personas);
})
PersonaRoutes.get("/reset",async(req,res) =>{
    await persona.deleteMany({});
})
PersonaRoutes.post("/create",async(req,res)=>{
    const idPersona = req.body.idPersona;
    const nombreCompleto = req.body.nombreCompleto;
    const edad = req.body.edad;
    const fechaNacimiento = req.body.fechaNacimiento;
    const fechaInscripcion = req.body.fechaInscripcion;
    const costo = req.body.costo;

    const nuevaPersona = await persona.insertMany({
        idPersona,
        nombreCompleto,
        edad,
        fechaNacimiento,
        fechaInscripcion,
        costo,
    })

    res.send(nuevaPersona);
})

PersonaRoutes.get("/delete/:idPersona",async(req,res)=>{
    const {idPersona} = req.params;
    const personaToDelete = await persona.deleteOne({idPersona:idPersona});
    if(personaToDelete){
        res.send(personaToDelete);
    }else{
        res.status(404).send("La persona adjunta al id no existe")
    }
})