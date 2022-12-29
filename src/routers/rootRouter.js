// 각 모듈에 express를 호출해줘야 쓸수있다.
import express from "express";
import { login, getJoin, postJoin } from "../controllers/userController";
import { home, search } from "../controllers/videoController";

const rootRouter = express.Router();

rootRouter.get("/", home);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/login", login);
rootRouter.get("/search", search);

// server.js 에서 쓸 수 있게 모듈화 시켜서 내보내준다.
// 모든파일은 독립적이다.
export default rootRouter;
