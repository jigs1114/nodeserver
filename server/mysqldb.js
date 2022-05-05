const options = {
    client: 'mysql2',
    connection: {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'testdb'
    }
  }
  
  const knex = require('knex')(options);


  knex.schema
  .hasTable('users')
  .then((exists) => {
    if (!exists) {
      return knex.schema.createTable('users', (table) => {
        table.increments('id').primary()
        table.string('idcode')
        table.string('name')
        table.string('email')
        table.string('contact')
        table.integer('address')
      })
        .then(() => {
          console.log('Table \'users\' created')
        })
        .catch((error) => {
          console.error(`There was an error creating table: ${error}`)
        })
    }
  })
  .then(() => {
    console.log('user table exists')
  })
  .catch((error) => {
    console.error(`There was an error setting up the database: ${error}`)
  })



  knex.select('*').from('users Datas')
  .then(data => {
    console.log('users Datas:', data)
    console.log('data Datas:', data.length)
  })
  .catch(err => console.log(err))




module.exports = knex