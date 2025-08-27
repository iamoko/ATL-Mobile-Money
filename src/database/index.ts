const knex = require("knex");

const knexFile = require("../knexfile");
const environment = process.env.NODE_ENV || "development";

let cachedConnection: any = null;
let cachedMainConnection: any = null;

const mainConnection = () => {
  if (cachedMainConnection) {
    return cachedMainConnection;
  }

  if (!knexFile["main"]) {
    throw new Error(
      `Failed to get knex configuration for env:${process.env.NODE_ENV}`
    );
  }

  const connection = knex(knexFile["main"]);
  cachedMainConnection = connection;

  return connection;
};

const connection = () => {
  if (cachedConnection) {
    return cachedConnection;
  }

  if (!knexFile[environment]) {
    throw new Error(
      `Failed to get knex configuration for env:${process.env.NODE_ENV}`
    );
  }

  const connection = knex(knexFile[environment]);
  cachedConnection = connection;

  return connection;
};

export const database = connection();
export const databaseMain = mainConnection();
