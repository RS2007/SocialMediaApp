const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

async function connectToDB() {
  try {
    const hasConnected = await mongoose.connect(process.env.DB_URL);
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


