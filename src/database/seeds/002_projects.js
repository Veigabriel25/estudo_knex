
exports.seed = knex => {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(() => {
      // Inserts seed entries
      return knex('projects').insert([
        {user_id: 2, title: 'Projeto 1'},
        {user_id: 3, title: 'Projeto 2'},
      ]);
    });
};
