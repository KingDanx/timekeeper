const Pool = require("pg").Pool;
const env = require("dotenv");

env.config();

const pool = new Pool({
  user: "postgres",
  password: process.env.PW,
  host: "localhost",
  port: 5432,
  database: "timekeeper",
});

module.exports = pool;
