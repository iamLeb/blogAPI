const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // check if user already exist
        const checkUser = await User.findOne({ email });
        if (checkUser) return res.status(400).send({});
        const user = await User.create({
            name, email, password
        });
        res.json(user);
    } catch (e) {
        return res.statusCode(400);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check if user exist

    } catch (e) {
        console.log(e);
    }
}

const logout = () => {}

module.exports = {
    login,
    register,
    logout,
}