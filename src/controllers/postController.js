const Post = require('../models/post');
const httpErrors = require('http-errors');

// Crear un nuevo post
exports.createPost = async (req, res, next) => {
  try {
    const { title, image, body } = req.body;
    const post = new Post({ title, image, body, user: req.user.id });
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    next(err);
  }
};

// Listar todos los posts
exports.getPosts = async (req, res, next) => {
  try {
    const search = req.query.search || '';
    const posts = await Post.find({ title: new RegExp(search, 'i') }).populate('user');
    res.json(posts);
  } catch (err) {
    next(err);
  }
};

// Actualizar un post
exports.updatePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) throw httpErrors.NotFound('Post not found');
    if (post.user.toString() !== req.user.id) throw httpErrors.Forbidden('Not authorized');
    post.set(req.body);
    post.updated_at = Date.now();
    await post.save();
    res.json(post);
  } catch (err) {
    next(err);
  }
};

// Borrar un post
exports.deletePost = async (req, res, next) => {
  try {
    const post = await Post.findById(req.params.id);
    if (!post) throw httpErrors.NotFound('Post not found');

    // Verificar si el usuario es el propietario del post
    if (post.user.toString() !== req.user.id) throw httpErrors.Forbidden('Not authorized');

    // Eliminar el post
    await Post.findByIdAndDelete(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};