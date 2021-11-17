import React from "react";
import axios from "axios";
import "./style.css";

const Home = () => {
  const BASE_URL = "http://localhost:4000";
  const getAllTodos = async () => {
    const todos = await axios.get(`${BASE_URL}/todos`);
    return todos;
  };
  getAllTodos();

  return (
    <div>
      <ul>
        {/* {todos.map((todo) => (
          <div key={todo.id}>
            <li>{todo.name}</li>
            <button>update</button>
            <button>delete</button>
          </div>
        ))} */}
      </ul>
    </div>
  );
};

export default Home;
