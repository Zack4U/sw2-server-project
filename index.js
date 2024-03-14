const express = require("express");
const app = express();

require("dotenv").config();
const CONNECTION_PORT = process.env.PORT || 3001;

app.listen(CONNECTION_PORT, () => {
    console.log(
        "listening on " + "http://localhost:" + CONNECTION_PORT + "..."
    );
});
