const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
require('dotenv').config();

const register = (req, res) => {
    const { email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    
    User.create(email, hashedPassword, (err, userId) => {
        if (err) return res.status(500).send(err);
        res.status(201).send({ userId });
    });
};

const login = (req, res) => {
    const { email, password } = req.body;
    
    User.findByEmail(email, (err, user) => {
        if (err || !user) return res.status(401).send('Invalid email or password');
        
        const isPasswordValid = bcrypt.compareSync(password, user.password);
        if (!isPasswordValid) return res.status(401).send('Invalid email or password');
        
        const token = jwt.sign({ userId: user.id }, process.env.SECRET_KEY, { expiresIn: '1h' });
        res.send({ token });
    });
};

module.exports = { register, login };
