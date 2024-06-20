"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const http_1 = __importDefault(require("http"));
const routes_1 = require("./routes/");
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
(0, dotenv_1.config)();
const app = (0, express_1.default)();
const PORT = process.env.PORT || "";
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const server = http_1.default.createServer(app);
app.use(routes_1.router);
const MONGO_URL = process.env.MONGO_URL || "mongodb://bruno:123456@localhost:27017";
const DB_NAME = process.env.DB_NAME || "BMW_model_cars";
// Establecer conexión a la base de datos
mongoose_1.default.connect(MONGO_URL, { dbName: DB_NAME });
// Manejar eventos de conexión
const db = mongoose_1.default.connection;
db.on('error', (error) => {
    console.error('Error de conexión a la base de datos:', error);
});
db.once('open', () => {
    console.log('Conexión establecida correctamente a la base de datos.');
});
db.on('disconnected', () => {
    console.log('La conexión a la base de datos se ha cerrado.');
});
server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
