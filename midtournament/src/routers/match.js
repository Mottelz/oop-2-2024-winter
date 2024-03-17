const router = require('express').Router();
const matchData = require('../data/match');

router.get('/matches/events/:eventId', async (req, res) => {
    const eid = req.params.eventId;
    const matches = matchData.getMatchesByTournament(eid);
    if (matches.length > 0) {
        res.json({matches});
    } else {
        res.status(400).json({ message: 'event does not have any matches.' })
    }
});

router.get('/matches/players/:playerId', async (req, res) => {
    const pid = req.params.playerId;
    const matches = matchData.getMatchesByPlayer(pid);
    if (matches.length > 0) {
        res.json({matches});
    } else {
        res.status(400).json({ message: 'player does not have any matches.' })
    }
});

module.exports = router;