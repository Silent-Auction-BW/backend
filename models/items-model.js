
const db = require('../database/config')

async function getAll(){
    return await db.table('items')
}

module.exports = {
    getAll,
};