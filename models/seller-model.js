

const db = require('../database/config')

async function getAll(){
    return await db.table('sellers')
}

async function getById(id){
    return await db.table('sellers as s')
    .where('s.seller_id', id)

}
async function addItem(id, item){
    return db('items').
    insert({
        seller_id: id,
        item_name: item.item_name,
        description: item.description,
        price: item.price,
        image_url: item.image_url,
    })
}


module.exports = {
    getAll,
    getById,
    addItem,

}