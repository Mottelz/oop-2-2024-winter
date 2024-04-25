const db = require('../src/data/init');

async function initializeDB () {
    await db.init();
};

async function getRecordFromDB(table, field, value) {
    const raw = `SELECT rowid, * FROM ${table} WHERE ${field}=?`;
    const stmnt = db.db.prepare(raw);
    const data = await stmnt.get(value);
    return data;
};

async function addToDB(table, fields, records) {
    const raw = `INSERT INTO ${table}(${fields.join(', ')}) VALUES (${fields.map((v) => `@${v}`).join(', ')})`;
    const stmnt = db.db.prepare(raw);
    for (const record of records) {
        await stmnt.run(record);
    };
};

module.exports = {
    addToDB,
    initializeDB,
    getRecordFromDB
};