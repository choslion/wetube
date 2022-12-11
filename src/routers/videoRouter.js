import express from "express";
import { watch, getEdit, postEdit, deleteVideo, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get("/:id(\\d+)", watch);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);
videoRouter.route("/:id(\\d+)/edit").get(getEdit).post(postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);
// 위에 한줄과 같아짐. get일떄는 getEdit를 불러주고 post 일때는 postEdit함수를 가져온다.
// 하나의 url에 여러개써줄때 유용.
// videoRouter.get("/:id(\\d+)/edit", getEdit);
// videoRouter.post("/:id(\\d+)/edit", postEdit);

export default videoRouter;
