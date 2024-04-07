const router = require('express').Router();
const { init } = require('../data/init');

router.get('/admin/init', async (req, res) => {
    await init();
    res.json({msg: 'DB initialized'});
});

module.exports = router;