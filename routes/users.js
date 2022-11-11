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
  res.send("dog");
});

module.exports = router;
