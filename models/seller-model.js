

const db = require('../database/config')

async function getAll(){
    return await db.table('sellers')
}

async function getById(id){
    return await db.table('sellers as s')
    .where('s.id', id)

}
async function addItem(id, item){
    return db('items').
    insert({
        seller_id: id,
        name: item.name,
        description: item.description,
        price: item.price,
        image_url: item.image_url,
        timer: item.timer

    })
}


module.exports = {
    getAll,
    getById,
    addItem,

}