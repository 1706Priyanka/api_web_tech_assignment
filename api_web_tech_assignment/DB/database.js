const mongoose = require("mongoose");

const db = () => {
  mongoose.connect(
    "mongodb+srv://backendProject:priyanka@cluster0.sflrfs9.mongodb.net/?retryWrites=true&w=majority",
    (data) => {
      console.log("conntection establilished...");
    },
    (error) => {
      console.log(error);
    }
  );
};

module.exports = db;
