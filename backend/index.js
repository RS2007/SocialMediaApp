const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoutes = require("./routes/user");
const postRoutes = require("./routes/posts");
const commentRoutes = require("./routes/comments");

const connectToDB = async () => {
  try {
    const hasConnected = await mongoose.connect(process.env.DB_URL);
    if (hasConnected) console.log("Conneted to database");
  } catch (err) {
    console.log(err.message);
  }
};
connectToDB();
const PORT = process.env.PORT || 5000;

app.use(express.urlencoded());
app.use(express.json({ limit: "50mb" }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000"],
  })
);
app.use("/user", userRoutes);
app.use("/post", postRoutes);
app.use("/comment", commentRoutes);

app.listen(PORT, () => {
  console.log("Server listening at " + PORT);
});
