const { db } = require('./init');

async function createPlayer(name, email, discord){
    const stmnt = db.prepare('INSERT INTO Players(name, email, discord) VALUES (?, ?, ?)');
    let info;
    try {
        info = await stmnt.run(name, email, discord);
    } catch (err) {
        console.error('[data.player.createPlayer] Unable to create player', err.message);
        return undefined;
    }
    return info;
}

async function getPlayerById(pid){
    const stmnt = db.prepare('SELECT rowid, * FROM Players WHERE rowId=?');
    const info = await stmnt.get(pid);
    return info;
}

async function getPlayerByEmail(pemail){
    const stmnt = db.prepare('SELECT rowid, * FROM Players WHERE email=?');
    const info = await stmnt.get(pemail);
    return info;
}

async function getAllPlayers(){
    const stmnt = db.prepare('SELECT rowid, * FROM Players');
    const info = await stmnt.all();
    return info;
}

function updatePlayerName(){}

function updatePlayerDiscord(){}

module.exports = {
    createPlayer, 
    getPlayerById,
    getAllPlayers,
    getPlayerByEmail
}