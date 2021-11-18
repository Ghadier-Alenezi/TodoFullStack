const express = require("express");
const {getAllTasks, getTaskById} = require("./../controllers/tasksController");

const todosRouter = express.Router();

todosRouter.get("/todos", getAllTasks)
todosRouter.get("/todos/:id", getTaskById)

module.exports = todosRouter;