// api/index.js

// Adjust the path if necessary depending on your build output
const server = require('../build/server');

// Export a function that Vercel will run as your serverless function
module.exports = async (req, res) => {
  try {
    // Call your server's handler or entry point.
    // This will vary based on your framework. For example:
    await server.handler(req, res);
  } catch (error) {
    console.error('Error in serverless function:', error);
    res.status(500).send('Internal Server Error');
  }
};
