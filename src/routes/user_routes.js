const userController = require("../controllers/user_controller");
const express = require("express");
const router = express.Router();

// http://localhost/api/v1/users/new-user
router.post("/new", userController.createUser);

//localhost/api/v1/users/list-user
router.get("/", userController.getAllUsers);

// http://localhost/api/v1/users/get-user/:id
router.get("/user/:id", userController.getUser);

// http://localhost/api/v1/users/set-user/:id
router.put("/edit/:id", userController.editUser);

// http://localhost/api/v1/users/delete-user/:id
router.delete("/delete/:id", userController.deleteUser);

module.exports = router;
