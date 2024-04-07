const { db } = require('./init');

async function createPlayer(name, email, discord){
    const stmnt = db.prepare('INSERT INTO Players(name, email, discord) VALUES (?, ?, ?)');
    const info = await stmnt.run(name, email, discord);
    return info;
}

async function getPlayerById(pid){
    const stmnt = db.prepare('SELECT * FROM Players WHERE rowId=?');
    const info = await stmnt.get(pid);
    return info;
}

async function getPlayerByEmail(pemail){
    const stmnt = db.prepare('SELECT * FROM Players WHERE email=?');
    const info = await stmnt.get(pemail);
    return info;
}

async function getAllPlayers(){
    const stmnt = db.prepare('SELECT * FROM Players');
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