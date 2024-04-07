const router = require('express').Router();
const { 
    getPlayerById, 
    getAllPlayers, 
    getPlayerByEmail, 
    createPlayer 
} = require('../data/player')

router.get('/players/all', async (req, res) => {
    const players = await getAllPlayers();
    res.json({players});
});


router.get('/players/id/:playerId', async (req, res) => {
    const pid = req.params.playerId;
    if (pid !== undefined) {
        const player = await getPlayerById(pid);
        res.json(player);
    } else {
        res.status(400).json({message: 'player not found'});
    }
});

router.get('/players/email/:playerEmail', async (req, res) => {
    const pemail = req.params.playerEmail;
    if (pemail !== undefined) {
        const player = await getPlayerByEmail(pemail);
        res.json(player);
    } else {
        res.status(400).json({message: 'player not found'});
    }
});

router.post('/players/create', async (req, res) => {
    const name = req.body?.name;
    const email = req.body?.email;
    const discord = req.body?.discord;

    if(email && name && discord) {
        const newPlayer = await createPlayer(name, email, discord);
        res.json({ message: 'player created', player: newPlayer })
    } else {
        res.status(400).json({ message: 'missing player email' })
    }
});


module.exports = router;