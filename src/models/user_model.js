const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    user_name: { type: "string", required: true },
    password: { type: "string", required: true },
    firstname: { type: "string", required: true },
    lastname: { type: "string", required: true },
    nacionality: { type: "string", required: true },
    document: { type: "string", required: true, unique: true },
    user_email: { type: "string", required: true, unique: true },
    user_active: { type: "boolean", required: true, default: false },
});
