const express = require("express");
const {getAllTasks, getTaskById, updateTask, deleteTask, addTask} = require("./../controllers/tasksController");

const todosRouter = express.Router();

todosRouter.get("/todos", getAllTasks)
todosRouter.get("/todos/:id", getTaskById)
todosRouter.put("/todo/:id", updateTask), 
todosRouter.delete("/todo/:id", deleteTask)
todosRouter.post("/todos", addTask)
module.exports = todosRouter;