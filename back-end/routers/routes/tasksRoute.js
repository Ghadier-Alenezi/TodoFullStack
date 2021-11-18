const express = require("express");
const {getAllTasks} = require("./../controllers/tasksController");

const todosRouter = express.Router();

todosRouter.get("/todos", getAllTasks)