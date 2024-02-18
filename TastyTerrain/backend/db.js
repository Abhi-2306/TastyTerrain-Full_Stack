const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://abhijithpandiri:abhibunny23@cluster0.cwragrh.mongodb.net/TastyTerrain?retryWrites=true&w=majority";
const mongodb = async () => {
  await mongoose
    .connect(mongoURI)
    .then(() => console.log("Connected to database successfully"))
    .catch((e) => console.log(e));
};

module.exports = mongodb;
