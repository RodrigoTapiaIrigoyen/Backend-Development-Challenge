const express = require('express');
const { createUser, getUserById } = require('../controllers/userController');
const router = express.Router();

// Ruta para crear un usuario
router.post('/', createUser);

// Ruta para obtener un usuario por ID
router.get('/:id', getUserById);

module.exports = router;
