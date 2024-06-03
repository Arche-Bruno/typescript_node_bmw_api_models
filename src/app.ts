import express from "express"
import {config} from "dotenv"
import http from "http"
import { router } from "./routes/";
import bodyParser from "body-parser";
import cors from "cors"
import mongoose from "mongoose";



config();
const app = express();
const PORT = process.env.PORT || ""

app.use(bodyParser.json());
app.use(cors());

const server = http.createServer(app);

app.use(router)

const MONGO_URL = process.env.MONGO_URL || "mongodb://bruno:123456@localhost:27017"
const DB_NAME = process.env.DB_NAME || "BMW_model_cars";

// Establecer conexión a la base de datos
mongoose.connect(MONGO_URL, { dbName: DB_NAME });

// Manejar eventos de conexión
const db = mongoose.connection;

db.on('error', (error) => {
  console.error('Error de conexión a la base de datos:', error);
});
db.once('open', () => {
  console.log('Conexión establecida correctamente a la base de datos.');
});
db.on('disconnected', () => {
  console.log('La conexión a la base de datos se ha cerrado.');
});
server.listen(PORT,()=>{
    console.log(`Server listening on port ${PORT}`)
    
})