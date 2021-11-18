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

const PORT = process.env.PORT || 3001;

// crud
// get all tasks
app.get("/todos", todosRouter);
// need to set the edges cases

// get task by params id
app.get("/todos/:id",todosRouter);

// get task by query id
app.get("/todo", todosRouter);

// update a task
app.put("/todo/:id", todosRouter);

// delete a task
app.delete("/todo/:id", todosRouter);

// add a task
app.post("todos", todosRouter)

app.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
