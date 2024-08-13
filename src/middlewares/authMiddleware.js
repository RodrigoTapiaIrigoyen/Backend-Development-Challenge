const jwt = require('jwt-simple');
const httpErrors = require('http-errors');
const dotenv = require('dotenv');

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];
    const decoded = jwt.decode(token, JWT_SECRET);
    req.user = { id: decoded.id };
    next();
  } catch (err) {
    next(httpErrors.Unauthorized('Invalid token'));
  }
};
