const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
require('dotenv').config()

const PORT= process.env.PORT || 4000;


app.listen(PORT, ()=>{
    console.log(`Server on ${PORT}`)
});