//import express from 'express';
const express = require("express");

//import dotenv from 'dotenv';
// Load environment variables from .env file
// This is used to manage sensitive information like database connection strings, API keys, etc.
// It allows you to keep these values out of your source code, which is a good security practice.
const dotenv = require("dotenv");

//import cors from 'cors';
// CORS (Cross-Origin Resource Sharing) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.
// It is used to enable or restrict resources to be requested from another domain.
const cors = require("cors");

//import connectDB from './config/db.js';
// This module is responsible for connecting to the MongoDB database.
const connectDB = require("./config/db");

dotenv.config(); // Load environment variables from .env file

connectDB(); // Connect to the MongoDB database

//create an express application
const app = express();

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON request bodies

app.use("/api/auth", require("./routes/authRoutes")); // Use authentication routes

const PORT = process.env.PORT || 5000; // Set the port to listen on, defaulting to 5000 if not specified
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`); // Log a message when the server starts
});
