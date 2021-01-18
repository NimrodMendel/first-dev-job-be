const { jobMethods } = require("../database/jobDB");

class Job {
  constructor() {
    this.db = new jobMethods();
  }

  getAll = () => {
    return this.db.getAll();
  };
  getById = (id) => {
    return this.db.getById(id);
  };
  addJob = (jobDetails) => {
    return this.db.addJob(jobDetails);
  };
  getAllLikes = (id) => {
    return this.db.getAllLikes(id);
  };
  getJobLocation = (id) => {
    return this.db.getJobLocation(id);
  };
  getSaraly = (id) => {
    return this.db.getSaraly(id);
  };
  getSalariesAsc = () => {
    return this.db.getSalariesAsc();
  };
  getSalariesDesc = () => {
    return this.db.getSalariesDesc();
  };
  getLikesAsc = () => {
    return this.db.getLikesAsc();
  };
  getLikesDesc = () => {
    return this.db.getLikesDesc();
  };
}

module.exports = new Job();
