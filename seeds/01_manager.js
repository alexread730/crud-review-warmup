
const bcrypt = require('bcrypt');

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return  knex.raw('TRUNCATE manager RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('manager').insert([
        {
          email: 'alexread730@gmail.com',
          password: bcrypt.hashSync('mypassword', 8)
        },
        {
          email: 'mread816@gmail.com',
          password: bcrypt.hashSync('ballet', 8)
        }
      ]);
    });
};
