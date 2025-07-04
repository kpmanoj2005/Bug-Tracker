const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },// Name of the user
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type:String,
        enum:['admin','developer','tester'],
        default: 'tester',// Default role is 'tester'
        
    }
    // Add more fields as needed
});



module.exports = mongoose.model('User', userSchema);
