
const db = require('../database/config')

async function getAll(){
    return await db.table('items')
}

async function getById(item_id) {
    return await db.table('items as i')
    .where('i.item_id', item_id)
    .select('i.item_id', 'i.item_name', 'i.seller_id', 'i.description', 'i.price', 'i.timer_length', 'i.image_url', 'i.recorded_on')
  }
function update(id, changes) {
    return db('items')
      .where({ id })
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