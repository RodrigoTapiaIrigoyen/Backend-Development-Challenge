require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const createError = require('http-errors');

// Middleware para manejar JSON
app.use(express.json());

// Importar rutas
const userRoutes = require('./src/routes/userRoutes');
const authRoutes = require('./src/routes/authRoutes');
const postRoutes = require('./src/routes/postRoutes');

// Usar rutas
app.use('/user', userRoutes);
app.use('/auth', authRoutes);
app.use('/posts', postRoutes);

// Manejar errores 404
app.use((req, res, next) => {
  next(createError(404));
});

// Middleware de manejo de errores
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message,
    },
  });
});

// Conectar a MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB', err));

// Escuchar en el puerto configurado
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
