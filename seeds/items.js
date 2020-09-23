
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {   
          item_id: 1,
          seller_id: 1,
          item_name: 'William',
        image_url: 'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80',
        price: 100,
        description: 'Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data ',
        timer_length: '15:00 min'
      },
        { 
          item_id : 2,
          seller_id: 1,
          item_name: 'William',
        image_url: 'https://images.unsplash.com/photo-1519687774292-8ef26b975fc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 100,
        description: 'Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data ',
        timer_length: '15:00 min'},
        {  item_id : 3,
          seller_id: 1,
          item_name: 'William',
        image_url: 'https://images.unsplash.com/photo-1519687774292-8ef26b975fc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 100,
        description: 'Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data ',
        timer_length: '15:00 min'},
        { 
          item_id : 4,
          seller_id: 2,
          item_name: 'Bobby',
        image_url: 'https://images.unsplash.com/photo-1519687774292-8ef26b975fc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 100,
        description: 'Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data ',
        timer_length: '15:00 min'},
        {  item_id : 5,
          seller_id: 1,
          item_name: 'William',
        image_url: 'https://images.unsplash.com/photo-1519687774292-8ef26b975fc4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
        price: 100,
        description: 'Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data Markup Data ',
        timer_length: '15:00 min'},

      ]);
    });
};
