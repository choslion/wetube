import express from "express";
import { watch, getEdit, postEdit, deleteVideo, getUpload, postUpload } from "../controllers/videoController";
import { protectorMiddleware } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").all(protectorMiddleware).get(getEdit).post(postEdit);
videoRouter.route("/:id([0-9a-f]{24})/delete").all(protectorMiddleware).get(deleteVideo);
videoRouter.route("/upload").all(protectorMiddleware).get(getUpload).post(postUpload);

// 하나의 url에 여러개써줄때 유용.
// 위에 한줄과 같아짐. get일떄는 getEdit를 불러주고 post 일때는 postEdit함수를 가져온다.
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);

export default videoRouter;
