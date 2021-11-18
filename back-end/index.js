const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const e = require("express");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
dotenv.config();

let todos = [
  { id: 1, name: "code", isCompleted: false, deleted: false },
  { id: 2, name: "sleep", isCompleted: false, deleted: false },
  { id: 3, name: "wake up", isCompleted: false, deleted: true },
];

const PORT = process.env.PORT || 4000;

// crud
// get all tasks
app.get("/todos", (req, res) => {
  try {
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
});
// need to set the edges


app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
