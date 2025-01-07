require('dotenv').config();
const express = require('express');
const sequelize = require('./Config/database');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

const app = express();
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// Sync models and start the server
sequelize.sync().then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
});
