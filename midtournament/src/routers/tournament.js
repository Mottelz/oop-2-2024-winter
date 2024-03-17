const router = require('express').Router();

router.post('/event/create', async (req, res) => {
    const format = req.body.format;
    const rounds = +req.body.rounds;
    const maxPlayers = +req.body.maxPlayers;
    const minPlayers = +req.body.minPlayers;

    if (format && rounds && maxPlayers && minPlayers) {
        res.json({
            format,
            rounds,
            maxPlayers,
            minPlayers,
            id: 0
        });
    } else {
        res.status(400).json({ message: 'missing data' })
    }
});

router.get('/event', async (req, res) => {
    res.json({events: [
        {format: 'swiss', rounds: 4, id: 0},
        {format: 'swiss', rounds: 4, id: 1},
        {format: 'swiss', rounds: 4, id: 2},
        {format: 'swiss', rounds: 4, id: 3}
    ]});
});

router.get('/event/:eventId', async (req, res) => {
    const eid = +req.params.eventId;
    res.json({
        id: eid
    });
});

module.exports = router;