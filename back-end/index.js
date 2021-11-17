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

// creat a new task
app.delete("/todos/:id", (req, res) => {
  fs.readFile("./db/tasks.json", (err, data) => {
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
});

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
