
const db = require('../database/config')

async function getAll(){
    return await db.table('items')
}

function getById(id) {
    return db('items')
      .where({ id })
      .first();
  }
function update(id, changes) {
    return db('items')
      .where('item_id', id )
      .update(changes);
  }

 
  
  function remove(id) {
    return db('items')
      .where('item_id', id)
      .del();
  }

module.exports = {
    getAll,
    update,
    remove,
    getById
    
};