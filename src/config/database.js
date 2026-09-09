const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://nninawe02_db_user:wsM3KaoTturulMNS@namstenode.yjzvvao.mongodb.net/devTinder",
  );
};

module.exports = connectDB;
