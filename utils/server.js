const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const mongoose= require('mongoose')
dotenv.config({  path:'../utils/config.env'});
const connectDb = require('../config/connectDb')

//const colors = require('colors')


//database

connectDb();
//config dotenv 



// rest objects

const app= express();

//middlewares

app.use(morgan('dev'));
app.use(express.json());
app.use(cors());


//routes
//user Routes
app.use('/api/v1/users', require('../Routes/userRoute'))
app.use('/api/v1/transaction', require('../Routes/transactionRoutes'))


// port

const PORT = 8080 || process.env.PORT

//listen

app.listen(PORT , () => {

    console.log('server running on port  '+PORT);
});