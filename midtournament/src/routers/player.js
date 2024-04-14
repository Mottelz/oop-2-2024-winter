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
        if(player) {
            res.json(player);
        } else {
            res.status(404).json({message: 'player not found'})
        }
    } else {
        res.status(400).json({message: 'missing player id'});
    }
});

router.get('/players/email/:playerEmail', async (req, res) => {
    const pemail = req.params.playerEmail;
    if (pemail !== undefined) {
        const player = await getPlayerByEmail(pemail);
        if (player) {
            res.json(player);
        } else {
            res.status(404).json({message: 'player not found'})
        }
    } else {
        res.status(400).json({message: 'missing player email'});
    }
});

router.post('/players/create', async (req, res) => {
    const name = req.body?.name;
    const email = req.body?.email;
    const discord = req.body?.discord;

    if(email && name && discord) {
        const newPlayer = await createPlayer(name, email, discord);
        if(newPlayer) {
            res.json({ message: 'player created', player: newPlayer });
        } else {
            res.status(400).json({ message: 'invalid data. player may already exist.'})
        }
    } else {
        res.status(400).json({ message: 'missing player data' })
    }
});


module.exports = router;