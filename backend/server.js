const express = require('express');
const colors = require('colors');
const path = require('path');
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


//Routes 
app.use('/api/users', require('./routes/userRoutes'));

app.use('/api/tickets', require('./routes/ticketRoutes'));

// serve frontend
if (process.env.NODE_ENV === 'production') { 
    // set build folder as static folder
    app.use(express.static(path.join(__dirname, '../frontend/build')));

    app.get('*', (req, res) => { 
        res.sendFile(__dirname, '../frontend', 'build', 'index.html');
    })
} else {
    app.get('/', (req, res) => { 
        res.json({message: 'welcome to support desk'});
    
    })
}


// error Handler
app.use(errorHandler);



app.listen(PORT, () => { 
    console.log(`Server is running on port ${PORT}`);
})