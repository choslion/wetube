// const express = require("express");
import express from "express";
import morgan from "morgan";

// 모듈화되어져서 온 파일들을 쓸 수 있게 해준다.
import globalRouter from "./routers/globalRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";

// sexy code
const PORT = 4000;

// current working directory 즉 현재 작업위치를 알려줌 (경로알때 좋을듯)
// console.log(process.cwd());

const app = express();
// middleware express morgan
const logger = morgan("dev");
app.set("view engine", "pug");
// views 폴더가 현재작업위치가 아니라서 경로를 재설정해줌.
// 현재작업위치는 package json 의 위치.
app.set("views", process.cwd() + "/src/views");

// use morgan express
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

const handleListening = () => console.log(`server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);
