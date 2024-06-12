const jwt = require('jsonwebtoken');
const User = require('../models/User');

const verifyAuthentication = async (req, res, next) => {
    try {
        // read token from cookie
        const token = req.cookies.Authorization;
        // decode token
        const decoded = jwt.verify(token, process.env.SECRET);
        // check expiration
        if (Date.now() > decoded.exp) return res.sendStatus(400);
        // find user using the sub (user._id)
        const user = await User.findById(decoded.sub);
        if (!user) return res.sendStatus(400);
        // attach the user to req
        req.user = user;
        console.log('User Authorization Completed!')

        next();
    } catch (e) {
        res.sendStatus(401);
    }
}

module.exports = verifyAuthentication;