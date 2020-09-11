
exports.up = knex => {
  return knex.schema.createTable('projects', table => {
    table.increments('id');
    table.text('title');

    //relationship

    table.integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE');

    table.timestamps(true, true);

  })
};

exports.down = knex => {
  return knex.schema.dropTable('projects')
};