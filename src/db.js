// , { useNewUrlParser: true, useUnifiedTopology: true }
import mongoose from "mongoose";

mongoose.set("strictQuery", true);

mongoose.connect(process.env.DB_URL);
const db = mongoose.connection;

const handleOpen = () => console.log("π Connectend to DB");
const handleError = (error) => console.log("β DB ERROR", error);

// onμ μ¬λ¬λ² λ°μκ°λ₯ μ΄λ²€νΈ
db.on("error", (err) => {
  console.log("DB Error", error);
});
// once λ νλ²λ§ μ΄λ²€νΈλ°μ
db.on("error", handleError);
db.once("open", handleOpen);
