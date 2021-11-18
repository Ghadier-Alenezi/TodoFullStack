const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
dotenv.config();

// main router
const todosRouter = require("./routers/routes/tasksRoute");

let todos = [
  { id: 1, name: "code", isCompleted: false, isDeleted: false },
  { id: 2, name: "sleep", isCompleted: false, isDeleted: false },
  { id: 3, name: "wake up", isCompleted: false, isDeleted: true },
];

const PORT = process.env.PORT || 3001;

// crud
// get all tasks
app.get("/todos", (req, res) => {
  try {
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
});
// need to set the edges cases

// get task by params id
app.get("/todos/:id", (req, res) => {
  try {
    const { id } = req.params;
    todos.find((elem) => {
      if (elem.id == id) {
        res.status(200).json(elem);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

// get task by query id
app.get("/todo", (req, res) => {
  try {
    const { id } = req.query;
    todos.find((element) => {
      if (element.id == id) {
        res.status(200).json(element);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
