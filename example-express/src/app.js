// Imports
const express = require('express');
const bodyParser = require('body-parser')
const patientRouter = require('./routers/patient');

// Create & Configure App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Create routes
app.get('/', (req, res) => {
    res.send('Please come back later.');
});
app.get('/error', (req, res) => {
    throw new Error('Something has gone horribly worng. Please take a nap as soon as possible.')
});
app.use('/patient', patientRouter);

// 404 & Error Handling
app.all('*', (req, res) => {
    res.status(404).json({
        msg: 'Something was wrong with your request', 
        reqMethod: req.method,
        reqPath: req.path,
        reqQuery: req.query,
        reqBody: req.body, 
    });
});

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        msg: 'Internal Server Error',
    });
};
app.use(errorHandler);

module.exports = app;