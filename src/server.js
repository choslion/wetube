// const express = require("express");
import express from "express"
// sexy code
const PORT = 4000;

const app = express();

app.get("/", (req,res) => {
  console.log(req.url, req.method);
  res.end('Hello node');
})

const handleListening = () => console.log(`server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);