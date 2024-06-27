const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const mongoose = require("mongoose");
const app = require("./app");

// console.log(process.env.DATABASE_PASSWORD);

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

mongoose.connect(DB, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
}).then((con) => {
  // console.log(con.connections);
  console.log("DB connected Successfully");
}).catch(err => {
  console.error("DB connection error:", err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on the port ${port}`);
});
