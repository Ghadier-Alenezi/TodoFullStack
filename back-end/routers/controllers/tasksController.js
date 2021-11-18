const todosRouter = express.Router();

const getAllTasks = (req, res) => {
  try {
    res.status(200).json(todos);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {getAllTasks};