const express = require("express");
const pool = require("../db");
const router = express.Router();

router.post("/:id", async (req, res) => {
  const customer = !req.body.customer ? null : req.body.customer;
  const id = req.params.id;
  let date = new Date().toLocaleString("en-US", {
    timeZone: "America/Chicago",
  });

  const time = await pool.query(
    `INSERT INTO user_times (user_id, start_time, for_customer) VALUES('${id}','${date}', ${
      !customer ? "" : "'"
    }${customer}${!customer ? "" : "'"})`
  );

  res.send(date);
});

router.get("/", async (req, res) => {
  const times = await pool.query("SELECT * FROM user_times");
  res.json(times.rows);
});

module.exports = router;
