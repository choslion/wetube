// const express = require("express");
import express from "express"
import morgan from "morgan"
// sexy code
const PORT = 4000;

const app = express();
// middleware express morgan
const logger = morgan("dev");

const login = (req,res) => {
  console.log("logged in!");
  res.send("you've logged in!");
}

const home = (req,res) => {
  res.send("you are in home");
}

app.use(logger);
app.get("/login", login);
app.get("/", home);


const handleListening = () => console.log(`server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);