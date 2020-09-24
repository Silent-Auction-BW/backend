
const db = require('../database/config')

async function getAll(){
    return await db.table('items')
}

async function getById(id) {
    return await db.table('items as i')
    .where('i.item_id', id)
    // no column for items.timer so i removed it for now
    .select('i.item_id', 'i.item_name', 'i.seller_id', 'i.description', 'i.price', 'i.timer_length', 'i.image_url', 'i.recorded_on',  'i.itemState')
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