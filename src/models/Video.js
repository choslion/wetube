import mongoose, { mongo } from "mongoose";

// models 의 생김새(구조) = 데이터베이스에서 테이블 느낌
const videoSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true, maxLength: 40 },
  // title: {type:String};
  fileUrl: { type: String, required: true },
  thumbUrl: { type: String, required: true },
  description: { type: String, required: true, trim: true, maxLength: 100 },
  createdAt: { type: Date, required: true, default: Date.now },
  hashtags: [{ type: String, trim: true }],
  meta: {
    views: { type: Number, default: 0, required: true },
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "Comment" }],
  owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

videoSchema.static("formatHashtags", function (hashtags) {
  return hashtags.split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
});

const Video = mongoose.model("Video", videoSchema);
// "파일명" , 문서구조 변수로담은것.
export default Video;
