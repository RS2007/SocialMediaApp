const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

async function connectToDB() {
  try {
    console.log(process.env.DB_URL);
    const hasConnected = await mongoose.connect(process.env.DB_URL);
    console.log(hasConnected);
    if (hasConnected) console.log("Conneted to database");
  } catch (err) {
    console.log(err.message);
  }
}
connectToDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server listening at " + PORT);
});
