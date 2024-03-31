const router = require('express').Router();
const db = require('../data/init');

router.get('/admin/init', async (req, res) => {
    await db.init();
    res.json({msg: 'DB initialized'});
});

module.exports = router;