const User = require('../models/user');
const httpErrors = require('http-errors');

// Registro de usuario
exports.createUser = async (req, res, next) => {
  try {
    const { name, profilePic, email, password } = req.body;
    const user = new User({ name, profilePic, email, password });
    await user.save();
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};

// Obtener usuario por ID
exports.getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) throw httpErrors.NotFound('User not found');
    res.json(user);
  } catch (err) {
    next(err);
  }
};
