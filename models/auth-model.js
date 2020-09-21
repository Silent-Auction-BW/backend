// const bcrypt = require("bcryptjs")

const db = require("../database/config")


async function add(user) {
	// user.password = await bcrypt.hash(user.password, 14)

	if(user.role === 'seller'){
		const [seller_id] = await db("sellers").insert({name: user.name, password: user.password})
		return findById(seller_id, user.role)
	}
	else if (user.role ==='bidder'){
		const [bidder_id] = await db("bidders").insert({name: user.name, password: user.password})
        return findById(bidder_id, user.role) 
	}
}



async function findBy(filter) {
        
    const bidder = await db("bidders as b")
        .where(filter)
        .select("b.bidder_id", "b.name", "b.password")
        .first()
      
    const seller = await db("sellers as s")
        .where(filter)
        .select("s.seller_id", "s.name", "s.password")
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
		.select("bidder_id", "name")
		.where({ bidder_id })
		.first()

	const seller = await db("sellers")
	.select("seller_id", "name")
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
	findBy,
	findById,
}