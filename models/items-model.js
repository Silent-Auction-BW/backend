
const db = require('../database/config')

async function getAll(){
    return await db.table('items')
}

async function getById(item_id) {
    return await db.table('items as i')
    .where('i.item_id', item_id)
    .select('i.item_id', 'i.item_name', 'i.seller_id', 'i.description', 'i.price', 'i.timer_length', 'i.image_url', 'i.recorded_on', 'i.timer', 'i.itemState')
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
  async function addOffer(id, offer){

    const itemId = id[0]
    const bidder_id = id[1]

    return db('offers').
    insert({
        item_id: id.id,
        bidder_id: id.bidder_id,
        ammount: offer.ammount
    })
}

module.exports = {
    getAll,
    update,
    remove,
    getById,
    addOffer
    
};