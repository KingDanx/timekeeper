const express = require("express");
const pool = require("../db");
const router = express.Router();

//create a user
router.post("/create", async (req, res) => {
  try {
    console.log(pool);
    const newUser = await pool.query(
      `INSERT INTO users (first_name, last_name) VALUES ('${req.body.firstName}','${req.body.lastName}') RETURNING *`
    );
    return res.send(newUser);
  } catch (e) {
    console.error(e);
  }
});

//get all users
router.get("/", async (req, res) => {
  const allUsers = await pool.query(`SELECT * FROM users ORDER BY user_id ASC`);
  res.json(allUsers.rows);
});

//get a user
router.get("/:id", async (req, res) => {
  try {
    const user = await pool.query(
      `SELECT * FROM users WHERE user_id=${req.params.id} ORDER BY user_id ASC`
    );
    res.json(user.rows);
  } catch (e) {
    console.error(e);
  }
});

//update a user
router.put("/:id", async (req, res) => {
  try {
    const user = await pool.query(
      `UPDATE users SET first_name=$1, last_name=$2 WHERE user_id=${req.params.id} RETURNING *`,
      [req.body.firstName, req.body.lastName]
    );
    res.json(user);
  } catch (e) {
    console.error(e);
  }
});

module.exports = router;
