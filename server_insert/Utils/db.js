// Third party imports.
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { Long } = require('mongodb');

dotenv.config({ path: '/config.env'});

//Local Imports
// const userRouter = require

mongoose.connect(process.env.DB_CONNECTION)
    .then(connection => {
        console.log('Connected Successully');
    })
    .catch( console.log );




// const connect = async () => {
//     try {
//         mongoose.set('strictQuery', false);
//         const DB = await mongoose.connect(process.env.DB_URL, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true
//         });

//         const {name, host} = DB.connection;
//         console.log(`Connected to DB "${name}" in host "${host}"`);
//     } catch (error) {
//         console.log(`Error connecting to the database: ${error}`);
//     }
// }

// module.exports = {connect};
