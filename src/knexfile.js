// Update with your config settings.

require('dotenv').config({ path: require('find-config')('.env') });

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  main: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST_2,
      user: process.env.DB_USER_2,
      password: process.env.DB_PASSWORD_2,
      database: process.env.DB_NAME_2,
    },
  },

  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    },
  },

  migrations: {
    directory: "./database/migrations",
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    }
  }

};
