require('dotenv').config();
const port = process.env.EXPRESS_PORT ?? 3000;
const app = require('./src/app');

// Set Server to Listen
app.listen(port, () => {
    console.log(`app running at http://localhost:${port}`);
});