const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const fs = require("fs");

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;

// crud
// read all tasks
app.get("/todos", (req, res) => {
  fs.readFile("./db/tasks.json", (err, data) => {
    if (err) {
      console.log(err);
    } else {
      const todos = JSON.parse(data.toString());
      console.log(todos);
      res.status(200).json(todos);
    }
  });
});


app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
