const express = require("express");
const {getAllTasks, getTaskById, updateTask, deleteTask} = require("./../controllers/tasksController");

const todosRouter = express.Router();

todosRouter.get("/todos", getAllTasks)
todosRouter.get("/todos/:id", getTaskById)
todosRouter.put("/todo/:id", updateTask), 
todosRouter.delete("/todo/:id", deleteTask)

module.exports = todosRouter;