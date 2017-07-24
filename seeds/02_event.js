

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('event').del()
    .then(function () {
      // Inserts seed entries
      return knex('event').insert([
        {
          title: 'Alex bday',
          date: '7/30/2017',
          time: '3:40pm',
          manager_id: 1
        },
        {
          title: 'Merrill bday',
          date: '8/16/2017',
          time: '4:40pm',
          manager_id: 2
        },
        {
          title: 'Mau5 Red Rocks',
          date: '10/16/2017',
          time: '9:40pm',
          manager_id: 1
        },
        {
          title: 'Rock Colection',
          date: '9/16/2017',
          time: '9:40am',
          manager_id: 2
        },
        {
          title: 'Vegas with the Boys',
          date: '8/35/2017',
          time: '9:00am',
          manager_id: 1
        }

      ]);
    });
};
