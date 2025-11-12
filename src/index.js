const mongoose = require("mongoose");
const app = require("./app");
const config = require("./config/config");


// Done: CRIO_TASK_MODULE_UNDERSTANDING_BASICS - Create Mongo connection and get the express app to listen on config.port

// DONE - Create a MongoDB connection using Mongoose
mongoose.connect(config.mongoose.url, config.mongoose.options).then(() => {
  console.log("connected to MongoDB")
  app.listen(config.port, () => {
    console.log(`App is running on port ${config.port}`);
  });
})


