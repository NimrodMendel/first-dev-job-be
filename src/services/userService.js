const { userMethods } = require("../database/userDB");
class user {
  constructor() {
    this.db = new userMethods;
  }
  getById = (id) => {
    return this.db.get(id);
  };
  getByEmail = (email) => {
    return this.db.getByEmail(email);
  };
  add = (user) => {
    return this.db.add(user);
  };
  updateById = (id, updatedInfo) => {
    return this.db.update(id, updatedInfo);
  };
  updateRealatedJobs = (updatedInfo) => {
    return this.db.updateRealatedJobs(updatedInfo);
  };
}

module.exports = new user();
