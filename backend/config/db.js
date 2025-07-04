// import moongoose from 'mongoose';
const mongoose = require('mongoose');

//connect to MongoDB 
// CONNECT ->ASYNCRONOUS ARROW FUNCTION
// Connect to MongoDB using Mongoose
//async uses awit -> it will wait for promises to resolve
//like the database connection

//process.env.MONGO_URI -> this is the connection string for MongoDB
//.env -> environment variables
//MONGO_URI -> this is the connection string for MongoDB

//useNewUrlParser -> this is to use the new URL parser
//useUnifiedTopology -> this is to use the new Server Discover and Monitoring engine

//await -> this is to wait for the connection to be established
//mongoose.connect -> this is to connect to the MongoDB database
const connectDB = async () => {
    try {
        // Use the connection string to connect to MongoDB
            await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("MongoDB Connected");
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1); // Exit the process with failure
    }
}

// Export the connectDB function to be used in other parts of the application
// This allows us to call connectDB in our server file to establish the connection
module.exports = connectDB; // Export the connectDB function


//Why do we use mongoose?
// Mongoose is an ODM (Object Data Modeling) 
// library for MongoDB and Node.js.
// It provides a schema-based solution to model our application data, validating data.
// data, making it easier to work with MongoDB in a more structured way,
//and providing built-in type casting, validation, query building, and business logic hooks,
//and provides a powerful query language.