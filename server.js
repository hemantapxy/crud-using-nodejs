const express = require('express');
const app = express();
require('dotenv').config();

// Connect to the database
const dbConnect = require('./config/database');
dbConnect();

// Set the PORT
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Import routes for the todo API
const todoRoutes = require('./routes/todos');

// Mount the API routes
app.use('/api/v1', todoRoutes);




// Default route
app.get('/', (req, res) => {
    res.send('<h1>THIS IS MY HOME PAGE</h1>'); 
});


app.listen(4000,()=>{
    console.log("server is running successfully");
});
