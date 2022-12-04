// const express = require("express");
import express from "express"
import morgan from "morgan"

// 모듈화되어져서 온 파일들을 쓸 수 있게 해준다.
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

// sexy code
const PORT = 4000;

const app = express();
// middleware express morgan
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos",videoRouter);
app.use("/users", userRouter);


const handleListening = () => console.log(`server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);