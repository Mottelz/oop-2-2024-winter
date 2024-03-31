const fs = require('fs');
const db = require('better-sqlite3')('./tour.db', {verbose: console.log});

async function init() {
    const script = fs.readFileSync('./scripts/init.sql', 'utf-8');
    await db.exec(script)
};

module.exports = {
    init
};