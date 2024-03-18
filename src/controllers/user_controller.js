const userModel = require("../models/user_model");

const createUser = async (req, res) => {
    try {
        const {
            user_name,
            password,
            firstname,
            lastname,
            nacionality,
            document,
            user_email,
            user_active,
        } = req.body;
        const user = await userModel.create({
            user_name,
            password,
            firstname,
            lastname,
            nacionality,
            document,
            user_email,
            user_active,
        });
        console.log(user);
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
        });
    }
};

const getAllUsers = async (req, res) => {
    try {
        const users = await userModel.find();
        console.log(users);
        res.status(200).json(users);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
        });
    }
};
const getUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findById(id);
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
        });
    }
};
const editUser = async (req, res) => {
    try {
        const { id } = req.params;
        const {
            user_name,
            password,
            firstname,
            lastname,
            nacionality,
            document,
            user_email,
            user_active,
        } = req.body;
        const user = await userModel.findByIdAndUpdate(
            id,
            {
                user_name,
                password,
                firstname,
                lastname,
                nacionality,
                document,
                user_email,
                user_active,
            },
            { new: true }
        );
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
        });
    }
};
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await userModel.findByIdAndDelete(id);
        console.log(user);
        res.status(200).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: error.message,
        });
    }
};

module.exports = {
    createUser,
    getAllUsers,
    getUser,
    editUser,
    deleteUser,
};
