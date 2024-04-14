const db = require('../src/data/init');
async function initializeDB () {
    await db.init();
};

async function getRecordFromDB(table, field, value) {
    const raw = `SELECT rowid, * from ${table} WHERE ${field}=?`;
    const stmnt = db.db.prepare(raw);
    const data = await stmnt.get(value);
    return data;
}

module.exports = {
    initializeDB,
    getRecordFromDB
}