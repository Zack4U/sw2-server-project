const express = require("express");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const cors = require("cors");
const app = express();

require("dotenv").config();
const CONNECTION_PORT = process.env.PORT || 3001;

app.listen(CONNECTION_PORT, () => {
    console.log(`[INDEX] listening on http://localhost: ${CONNECTION_PORT}...`);
    db_connection();
});

const db_connection = () => {
    try {
        mongoose
            .connect(process.env.DB_CONNECTION_STRING)
            .then(() => {
                console.log(`[INDEX] Connected to MongoDB`);
            })
            .catch(() => {
                console.log("[INDEX] Could not connect to MongoDB");
            });
    } catch (error) {
        console.log(error);
    }
};
