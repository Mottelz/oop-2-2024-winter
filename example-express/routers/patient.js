const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.json({
        msg: 'we are working on it',
        route: '/patient/home',
    });
});

module.exports = router;