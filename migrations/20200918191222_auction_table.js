
exports.up = async function(knex) {
    await knex.schema.createTable("sellers", (table) => {
        table.increments("seller_id")
        table.string("username").unique().notNullable()
        table.string("password").notNullable()
    })
    
    await knex.schema.createTable("bidders", (table) => {
        table.increments("bidder_id")
        table.string("username").unique().notNullable()
        table.string("password").notNullable()
    })
    await knex.schema.createTable("items", (table) => {
        table.increments("item_id")
        table.integer("seller_id").notNullable().references("seller_id").inTable("sellers").onDelete("CASCADE").onUpdate("CASCADE")
        table.string("item_name").notNullable()
        table.string("description").notNullable()
        table.integer("price").notNullable()
        table.blob("image_url").notNullable()
        table.integer("timer_length").notNullable()
        table.integer("timer").notNullable()
        table.boolean("itemState").notNullable()
        table.timestamp('recorded_on').defaultTo(knex.fn.now());
    })
    await knex.schema.createTable("offers", (table) => {
        table.integer("item_id").notNullable().references("item_id").inTable("items").onDelete("CASCADE").onUpdate("CASCADE")
        table.integer("bidder_id").notNullable().references("bidder_id").inTable("bidders").onDelete("CASCADE").onUpdate("CASCADE")
        table.integer("ammount").notNullable()   
    table.primary([ "item_id", "bidder_id" ]);
    })
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("bidders")
    await knex.schema.dropTableIfExists("sellers")
    await knex.schema.dropTableIfExists("items")
    await knex.schema.dropTableIfExists("offers")
};
