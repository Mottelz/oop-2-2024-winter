// Imports
require('dotenv').config();
const express = require('express');
const patientRouter = require('./routers/patient');

// Create & Configure App
const app = express();
const port = process.env.EXPRESS_PORT ?? 3000;

// Create routes
app.get('/', (req, res) => {
    res.send('Please come back later.');
});
app.use('/patient', patientRouter);

// Set Server to Listen
app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`);
});