// Importación del framework express para realizar solicitudes http
const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", true);
const cors = require("cors");
const userRoutes = require("./src/routes/user_routes");

// bodyParser es un middleware de express
// lo que hace es parsear el cuerpo de las solicitudes entrantes
// en formato JSON, multipartes y lo convierte en un objeto JavaScript
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Poder acceder a leer archivo .env
require("dotenv").config();
const CONNECTION_PORT = process.env.PORT || 3005;

app.listen(CONNECTION_PORT, () => {
    console.log(`[INDEX] Listening on http://localhost:${CONNECTION_PORT}`);
});

// Conexión a la base de datos
const mongo_connect = () => {
    try {
        mongoose
            .connect(process.env.DB_CONNECTION_STRING)
            .then(() => {
                console.log("[INDEX] Connected to the database");
            })
            .catch((err) => {
                console.log("[INDEX] Error connecting to the database");
            });
    } catch (err) {
        console.log("[INDEX] " + err);
    }
};

mongo_connect();

// Rutas
app.use("/api/v1/users", userRoutes);
