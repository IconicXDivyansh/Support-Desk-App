const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db');
const PORT = process.env.PORT || 5000;

// connect to database
connectDB();

const app = express();


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => { 
    res.json({message: 'welcome to support desk'});

})

//Routes 
app.use('/api/users', require('./routes/userRoutes'));

// error Handler
app.use(errorHandler);

app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
})