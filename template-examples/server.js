const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');

// Create & Configure App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

// Create routes
app.get('/', (req, res) => {
    res.render('home', { });
    // res.render('home', { title: 'Home' });
});


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

// Set Server to Listen
app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`);
});