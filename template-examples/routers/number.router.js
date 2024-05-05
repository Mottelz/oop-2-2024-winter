const router = require('express').Router();

router.get('/number', async (req, res) => {
    const number = Math.floor(Math.random() * 100);
    res.render('numbers', { nums: [number]});
});

module.exports = router;