// 각 모듈에 express를 호출해줘야 쓸수있다.
import express from "express";
import { login, join } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", home);
globalRouter.get("/join", join);
globalRouter.get("/login", login);
globalRouter.get("/search", search);

// server.js 에서 쓸 수 있게 모듈화 시켜서 내보내준다.
// 모든파일은 독립적이다.
export default globalRouter;
