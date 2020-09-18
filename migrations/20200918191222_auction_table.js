
exports.up = async function(knex) {
    await knex.schema.createTable("sellers", (table) => {
        table.increments("seller_id")
        table.string("name").unique().notNullable()
        table.string("password").notNullable()
    })
    
    await knex.schema.createTable("bidders", (table) => {
        table.increments("bidder_id")
        table.string("name").unique().notNullable()
        table.string("password").notNullable()
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("bidders")
    await knex.schema.dropTableIfExists("sellers")
};
