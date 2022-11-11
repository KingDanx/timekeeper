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
  const allUsers = await pool.query(
    `SELECT * FROM users WHERE user_id=${req.params.id} ORDER BY user_id ASC`
  );
  res.json(allUsers.rows);
});

module.exports = router;
