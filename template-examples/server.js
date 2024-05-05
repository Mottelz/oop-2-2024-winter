const port = 3000;
const express = require('express');
const bodyParser = require('body-parser');
const numberRouter = require('./routers/number.router');
const a = require('./a')
// Create & Configure App
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.use(express.static('public'));

// Create routes
app.get('/', (req, res) => {
    res.render('home', { title: 'Home' });
});
app.use('', numberRouter);


// 404 & Error Handling
app.all('*', (req, res) => {
    res.status(404).render('404');
});

const errorHandler = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).render('error');
};
app.use(errorHandler);

// Set Server to Listen
app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`);
});