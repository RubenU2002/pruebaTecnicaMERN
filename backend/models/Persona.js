import mongoose from "mongoose";
const personaSchema = mongoose.Schema({
    idPersona:String,
    nombreCompleto:String,
    edad:String,
    fechaNacimiento:String,
    fechaInscripcion:String,
    costo:Number
})

const persona = mongoose.model("persona",personaSchema);
export default persona;