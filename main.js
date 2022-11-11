const express = require("express");
const app = express();
const cors = require("cors");
const users = require("./routes/users");

const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/api/users", users);

app.get("/", (req, res) => {
  res.send("Dog shit!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
