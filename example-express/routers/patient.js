const express = require('express');
const router = express.Router();

router.get('/home', (req, res) => {
    res.json({
        msg: 'we are working on it',
        route: '/patient/home',
    });
});

router.get('/id/:pid', (req, res) => {
    const id = req.params.pid;
    res.json({
        msg: 'still working on it.',
        patient: id,
    });
});

router.post('/new', (req, res) => {
    const patient = {
        id: 0,
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
    };

    res.json({
        msg: 'new client created',
        patient,
    })
});

module.exports = router;