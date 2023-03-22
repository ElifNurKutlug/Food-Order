const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(process.env.MONGODB_CONNECTION_STRING);

mongoose.connect(
  "mongodb+srv://elifnurkutlug:Elif.1995@cluster0.qyjmw5t.mongodb.net/food-order?retryWrites=true&w=majority"
);

//connection'ın açık kapalı olmasına göre iki farklı opsiyon verdiğimiz veritabanını dinleyen metotları yazalım:

var db = mongoose.connection;
db.on("connected", () => {
  console.log("Mongo DB bağlantısı başarıyla sağlandı.");
});

db.on("error", () => {
  console.log("Mongo DB bağlantısı hatalı.");
});

module.exports = mongoose;
