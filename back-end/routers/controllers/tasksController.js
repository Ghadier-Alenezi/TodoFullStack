const express = require("express");
const todosRouter = express.Router();

let todos = [
  { id: 1, name: "code", isCompleted: false, isDeleted: false },
  { id: 2, name: "sleep", isCompleted: false, isDeleted: false },
  { id: 3, name: "wake up", isCompleted: false, isDeleted: true },
];

const getAllTasks = (req, res) => {
  try {
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

const getTaskById = (req, res) => {
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
};

const updateTask = (req, res) => {
  try {
    const { id } = req.params;
    todos.forEach((element) => {
      if (element.id == id) {
        element.isCompleted = true;
      }
    });
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

const deleteTask = (req, res) => {
  try {
    const { id } = req.params;
    todos.forEach((element) => {
      if (element.id == id) {
        element.isDeleted = true;
      }
    });
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getAllTasks, getTaskById, updateTask, deleteTask };
