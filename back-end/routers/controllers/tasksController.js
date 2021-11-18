const express = require("express");
const todosRouter = express.Router();

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



module.exports = {getAllTasks, getTaskById};