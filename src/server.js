// const express = require("express");
import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";

// 모듈화되어져서 온 파일들을 쓸 수 있게 해준다.
import rootRouter from "./routers/rootRouter";
import videoRouter from "./routers/videoRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";

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
// express가 form 정보를 읽을수 있게해줌. 자바스크립트형식으로 바꿔준다.
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);

app.get("/add-one", (req, res, next) => {
  req.session.potato += 1;
  return res.send(`${req.session.id}\n${req.session.potato}`);
});
app.use(localsMiddleware);
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
