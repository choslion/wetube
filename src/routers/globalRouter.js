// 각 모듈에 express를 호출해줘야 쓸수있다.
import express from "express"
import {join} from "../controllers/userController";
import { trendVideos } from "../controllers/videoController";

const globalRouter = express.Router();

globalRouter.get("/", trendVideos);
globalRouter.get("/join" ,join);

// server.js 에서 쓸 수 있게 모듈화 시켜서 내보내준다.
// 모든파일은 독립적이다.
export default globalRouter;