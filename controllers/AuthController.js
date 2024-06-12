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
        return res.statusCode(401);
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // check if user exist
        const user = await User.findOne({ email });
        if (!user) return res.sendStatus(400);

        // check if password match
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) return res.sendStatus(400);

        // create jwt
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30;
        const token = jwt.sign({ sub: user._id, exp }, process.env.SECRET, {});

        // set cookie
        res.cookie('Authorization', token, {
            httpOnly: true ,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            expires: new Date(exp)
        });

        return res.sendStatus(200);
    } catch (e) {
        res.sendStatus(401)
    }
}

const checkAuth = async (req, res) => {
    try {
        res.status(200).send(req.user);
    } catch (e) {
        res.sendStatus(401);
    }
}

const logout = (req, res) => {
    try {
        res.clearCookie('Authorization');
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(401);
    }
}

module.exports = {
    login,
    register,
    logout,
    checkAuth,
}