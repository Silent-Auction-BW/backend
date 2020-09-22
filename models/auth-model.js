// const bcrypt = require("bcryptjs")

const db = require("../database/config")


async function add(user) {
	// user.password = await bcrypt.hash(user.password, 14)

	if(user.role === 'seller'){
		const [seller_id] = await db("sellers").insert({username: user.username, password: user.password})
		return findById(seller_id, user.role)
	}
	else if (user.role ==='bidder'){
		const [bidder_id] = await db("bidders").insert({username: user.username, password: user.password})
        return findById(bidder_id, user.role) 
	}
}

function find() {
	const bidders =  db("bidders").select("bidder_id", "username")
	const sellers =  db("sellers").select("seller_id", "username")

	if (!bidders){
		return sellers
	}
	else {
		return bidders
	}
}


async function findBy(filter) {
        
    const bidder = await db("bidders as b")
        .where(filter)
        .select("b.bidder_id", "b.username", "b.password")
        .first()
      
    const seller = await db("sellers as s")
        .where(filter)
        .select("s.seller_id", "s.username", "s.password")
        .first()



	if (bidder){
        return  {...bidder, role: "bidder"}
        
	}
	else if (seller) {
		return  {...seller, role: "seller"}
	}
}

async function findById(bidder_id, seller_id, role) {

	const bidder = await db("bidders")
		.select("bidder_id", "username")
		.where({ bidder_id })
		.first()

	const seller = await db("sellers")
	.select("seller_id", "username")
	.where({ seller_id })
	.first()

	if (!bidder){
		return  {...seller, role: role}
	}
	else {
		return  {...bidder, role: role}
	}
}


module.exports = {
	add,
	find,
	findBy,
	findById,
}