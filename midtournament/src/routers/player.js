const router = require('express').Router();

router.get('/players/:playerId', async (req, res) => {
    const pid = +req.params.playerId;
    if (pid !== undefined) {
        res.json({id: pid});
    } else {
        res.status(400).json({message: 'player not found'});
    }
});

router.post('/players/create', async (req, res) => {
    const name = req.body?.name;
    const email = req.body?.email;

    if(email && name) {
        res.json({
            name,
            email,
            id: 0
        })
    } else {
        res.status(400).json({ message: 'missing player data' })
    }
});


module.exports = router;