
//Import jwt
//Middleware to check if the user is authenticated 
//to protect routes that require authentication
//this middleware will check if request has a valid JWT token in the Authorization header

const jwt = require('jsonwebtoken');

//split the token from the Authorization header
//and verify it using the secret key
//the token is expected to be in the format "Bearer <token>"
//and authorize access to protected routes

const protect= (req, res, next) => {
    const token=req.headers.authorization?.split(' ')[1]; // Get token from Authorization header
    if (!token) {
        return res.status(401).json({ message: 'No token provided, authorization denied' });
    }   
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify token
        req.user = decoded; // Attach user info to request object
        next(); // Call next middleware or route handler
        {expiresIn: '1h'} // Optional: Set token expiration time
    }
    catch (error) {
        return res.status(401).json({ message: 'Token is not valid' });
    }
};

module.exports = {protect}; // Export the middleware to use in routes