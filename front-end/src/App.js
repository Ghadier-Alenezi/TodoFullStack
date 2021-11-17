import React from "react";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
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
        <Route exact path="/deleted" element={<Footer />} />
      </Routes>
      </Router>
    </>
  );
};

export default App;
