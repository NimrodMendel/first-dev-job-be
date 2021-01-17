const { jobsMethods } = require("../database/jobsDB");

class Job {
  constructor() {
    this.db = new jobsMethods();
  }

  getAll = () => {
    return this.db.getAll();
  };

  getById = (jid) => {
    return this.db.getById(jid);
  };

  add = (jobDetails) => {
    return this.db.addJob(jobDetails);
  };

  getAllLikes = (jid) => {
    return this.db.getAllLikes(jid);
  };

  getJobLocation = (jid) => {
    return this.db.getJobLocation(jid);
  };

  getSaraly = (jid) => {
    return this.db.getSaraly(jid);
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
