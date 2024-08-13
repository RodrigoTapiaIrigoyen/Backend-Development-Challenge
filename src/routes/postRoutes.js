const express = require('express');
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/postController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authMiddleware, createPost); // Cambiado a '/'
router.get('/', getPosts); // Cambiado a '/'
router.patch('/:id', authMiddleware, updatePost); // Cambiado a '/:id'
router.delete('/:id', authMiddleware, deletePost); // Cambiado a '/:id'

module.exports = router;
