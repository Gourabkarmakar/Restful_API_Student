const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/studentsApi", {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: true
}).then(() => {
  console.log("Connection is Sucessfull");
}).catch((e) => {
  console.log(`No Connection ${e}`);
})
