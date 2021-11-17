import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
// import axios from "axios";
import "./App.css";

const App = () => {
  console.log('hello!');
  return (
    <>
      <Header />
      <Home />
      <Router>
      <Routes>
        <Route exact path="/todos" element={<Home />} />
      </Routes>
      </Router>
    </>
  );
};

export default App;
