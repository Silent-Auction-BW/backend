
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('sellers').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('sellers').insert([
        {seller_id: 1, username: 'William', password: "abc123"},
        {seller_id: 2, username: 'Bobby', password: "abc123"}
        
      ]);
    });
};
