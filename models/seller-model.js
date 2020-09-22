

const db = require('../database/config')


async function addItem(id, item){
    return db('items').
    insert({
        auctioneer_id: id,
        name: item.name,
        description: item.description,
        price: item.price,
        image_url: item.image_url,
        end_date: item.end_date

    })
}