const cookieParser = require('cookie-parser')
require('dotenv').config({ path: 'variables.env' });
const createServer = require('./createServer');
const db = require('./db');

const server = createServer();

server.express.use(cookieParser())
// Todo use express middleware to populate current user

server.start({
    cors: {
        credentials: true,
        origin: process.env.NODE_ENV === 'production' ?  process.env.PROD_FRONTEND_URL : process.env.DEV_FRONTEND_URL
    }
}, deets => {
    console.log(`Server is now running on port http://localhost:${deets.port}`);
    }
);