/* eslint-disable no-console */

// Set up environment variables
require('dotenv').config({ path: 'config/dev.env' });

// Start the server
const { app } = require('./app');

// Start listening
app.listen(process.env.PORT, () => {
  console.log(`Visit http://localhost:${process.env.PORT}/`);
});
