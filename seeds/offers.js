
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('offers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('offers').insert([
        {item_id: 1,bidder_id: 1, ammount: 56},
        {item_id: 2,bidder_id: 1, ammount: 68},
        {item_id: 3,bidder_id: 3, ammount: 56}
      ]);
    });
};
