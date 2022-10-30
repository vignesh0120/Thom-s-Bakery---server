const mongoose = require("mongoose");

const Db = "mongo://0.0.0.0:27017/thomserver";

mongoose.Promise = global.Promise;

mongoose
  .connect(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: tru,
  })
  .then(() => {
    console.log("connected");
  })
  .catch((error) => console.log(error.message));
