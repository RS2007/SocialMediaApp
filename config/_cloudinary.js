const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: "duj8b4jzi",
  api_key: "661922427592468",
  api_secret: "dznsxttoDYQAUq9rs-lpa9QTIq0",
});

module.exports = { _cloudinary: cloudinary };
