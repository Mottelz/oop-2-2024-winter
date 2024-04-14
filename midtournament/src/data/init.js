require('dotenv').config();
const fs = require('fs');
const db = require('better-sqlite3')(process.env.DB_SOURCE, {});

async function init() {
    const script = fs.readFileSync('./scripts/init.sql', 'utf-8');
    await db.exec(script)
};

module.exports = {
    db,
    init
};