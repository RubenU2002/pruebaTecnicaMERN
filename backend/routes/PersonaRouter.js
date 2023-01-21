import express from "express";
import persona from "../models/Persona";

const PersonaRoutes = express.Router();

PersonaRoutes.get("/",async(req,res)=>{
    const personas = persona.find({});
    res.send(personas);
})
