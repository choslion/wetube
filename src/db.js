// , { useNewUrlParser: true, useUnifiedTopology: true }
import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://127.0.0.1:27017/wetube");
const db = mongoose.connection;

const handleOpen = () => console.log("💚 Connectend to DB");
const handleError = (error) => console.log("❌ DB ERROR", error);

// on은 여러번 발생가능 이벤트
db.on("error", (err) => {
  console.log("DB Error", error);
});
// once 는 한번만 이벤트발생
db.on("error", handleError);
db.once("open", handleOpen);
