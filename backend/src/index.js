require('dotenv').config({path: 'variables.env'});
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

// Todo use express middleware to handle cookies (JWT)
// Todo use express middleware to populate current user

server.start({
     //we only want this endpoint to be visited by approved urls as you dont want anyone to access your website from a different website, you only want our website to hit that
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL
    }
}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
}
);