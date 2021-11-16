import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import axios from "axios";


const App = () => {
  return (
    <div>
      <h1>Hello</h1> <Route exact path="/" element={<Header />} />
      <Route exact path="/" element={<Home />} />
      <Route exact path="/" element={<Footer />} />
    </div>
  );
};

export default App;
