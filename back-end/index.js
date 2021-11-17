const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
dotenv.config();

const PORT = process.env.PORT || 4000;

// crud
// read all tasks
app.get("/todos", (req, res) => {
  if (err) {
    console.log(err);
  } else {
    const todos = JSON.parse(data.toString());
    console.log(todos);
    res.status(200).json(todos);
  }
});

// creat a new task
app.delete("/todos/:id", (req, res) => {
  if (err) {
    console.log(err);
  } else {
    const { id } = req.params.id;
    const todos = JSON.parse(data.toString());
    for (let i = 0; i < todos.length; i++) {
      const element = todos[i];
      if (todos.id == id) {
        todos.splice(element, 1);
      }
    }
  }
  res.status(200);
  res.json(`the task is deleted`);
});

// update a task
app.put("/todos/:id/ediTask", (req, res) => {
  if (err) {
    console.log(err);
  } else {
    const { id } = req.params.id;
    const editTask = req.body;
    const todos = JSON.parse(data.toString());
    for (let i = 0; i < todos.length; i++) {
      todos[i].name = editTask;
      if (todos.id == id) {
        console.log(todos);
      }
    }
  }
});
// this update is not working I need help :/
// delete

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
