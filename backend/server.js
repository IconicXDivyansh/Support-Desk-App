const express = require('express');
const colors = require('colors');
const path = require('path');
const cors = require('cors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/tickets', require('./routes/ticketRoutes'));

// Serve frontend
if (process.env.NODE_ENV === 'production') {
  // Set build folder as static folder
  app.use(express.static(path.join(__dirname, '../frontend/dist')));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../', 'frontend', 'dist', 'index.html'));
  });
} else {
  app.get('/', (req, res) => {
    res.json({ message: 'Welcome to the Support Desk API' });
  });
}

// Error handler
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});