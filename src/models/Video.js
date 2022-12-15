import mongoose, { mongo } from "mongoose";

// models 의 생김새(구조) = 데이터베이스에서 테이블 느낌
const videoSchema = new mongoose.Schema({
  title: String,
  // title: {type:String};
  description: String,
  createdAt: Date,
  hashtags: [{ type: String }],
  meta: {
    views: Number,
    rating: Number,
  },
});

const Video = mongoose.model("Video", videoSchema);
// "파일명" , 문서구조 변수로담은것.
export default Video;
