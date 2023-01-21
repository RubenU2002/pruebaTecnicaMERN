import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import PersonaRoutes from "./routes/PersonaRouter.js";

const app  = express();

const stringConnection = 'mongodb://127.0.0.1:27017/prueba';

mongoose.set("strictQuery", false);
mongoose.connect(stringConnection)
    .then(() => {
      console.log("Conectado con exito a base de datos");
    })
    .catch((error) => {
      console.log("Error al conectar a la base de datos ", error)
    })

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(cors())

const port = 3000;

app.get("/",(req,res) => {
    res.send("Servidor Backend");   
})
app.use("/api/personas",PersonaRoutes);
app.listen(port,()=>console.log(`Servidor backend escuchando en el puerto: ${port}`))