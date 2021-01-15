const { ObjectId } = require("mongodb");
const { User } = require("../models/User");

class userMethods {
  async get(id) {
    //console.log(id);
    const user = await User.findOne({ _id: id });
    console.log(user);
  }
}

module.exports = { userMethods };
