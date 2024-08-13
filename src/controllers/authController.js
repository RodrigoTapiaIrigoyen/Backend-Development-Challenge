const jwt = require('jwt-simple');
const User = require('../models/user');
const httpErrors = require('http-errors');
const dotenv = require('dotenv');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// Inicio de sesión
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) throw httpErrors.Unauthorized('Invalid email or password');
    const isMatch = await user.comparePassword(password);
    if (!isMatch) throw httpErrors.Unauthorized('Invalid email or password');
    const token = jwt.encode({ id: user._id }, JWT_SECRET);
    res.json({ token });
  } catch (err) {
    next(err);
  }
};
