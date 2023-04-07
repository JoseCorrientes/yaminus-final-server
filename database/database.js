const { Pool } = require("pg");

const config = {
  user: "postgres",
  host: "localhost",
  password: "admin",
  database: "yaminus",
  port: 5433,
};
const newPool = new Pool(config);

module.exports = newPool;
