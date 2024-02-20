const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://abhijithpandiri:abhibunny23@cluster0.cwragrh.mongodb.net/TastyTerrain?retryWrites=true&w=majority";
const mongodb = async () => {
  try {
    await mongoose
      .connect(mongoURI)
      .then(() => console.log("Connected to database successfully"))
      .catch((e) => console.log(e));
    const fetched_data = await mongoose.connection.db.collection("food_items");
    //DONT EVER UNCOMMENT THIS CODE.
    // THIS IS TO INDICATE THAT THE CODE FROM YOUTUBE IS UPDATED TO THE CURRENT VERSION OF MONGODB
    // console.log(fetched_data);
    //   fetched_data.find({}).toArray(function(err,data){
    //     if(err)console.log(err);
    //     else console.log(data);
    //   })
    const data = await fetched_data.find({}).toArray();
    global.food_items = data;
    const foodCategory = await mongoose.connection.db.collection(
      "foodCategory"
    );
    const catData = await foodCategory.find({}).toArray();
    global.foodCategory = catData;
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongodb;
