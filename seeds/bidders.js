
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('bidders').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('bidders').insert([
        {bidder_id: 1, username: 'rowValue1',password: "ab123"},
        
      ]);
    });
};
