const { Job } = require("../models/Job");
const { ObjectId } = require("mongodb");

class jobMethods {
  async getById(id) {
    const jobPost = await Job.findById(id);
    return jobPost;
  }

  async getAll() {
    const jobPosts = await Job.find();
    return jobPosts;
  }

  async addJob(jobDetails) {
    const newJob = { ...jobDetails };
    const addedJob = await Job.create({ ...newJob });
    return addedJob;
  }

  async getAllLikes(jid) {
    const { likes } = await Job.findById(jid);
    return likes;
  }

  async updateJob(jid, jobDetails) {
    console.log(jid);
    const updated = await Job.findByIdAndUpdate(
      { _id: jid },
      { ...jobDetails },
      {
        omitUndefined: true,
        useFindAndModify: false,
        new: true,
        runValidators: true,
      }
    );
    return updated;
  }

  async getJobLocation(jid) {
    const location = await Job.findById(jid, { location: 1 });
    return location;
  }

  async getSaraly(jid) {
    const salary = await Job.findById(jid, { salary: 1 });
    return salary;
  }

  async getSalariesAsc() {
    const sortedSalariesAsc = await Job.find().sort({ salary: -1 });
    return sortedSalariesAsc;
  }

  async getSalariesDesc() {
    const sortedSalariesDesc = await Job.find().sort({ salary: 1 });
    return sortedSalariesDesc;
  }

  async getLiksAsc() {
    const sortedLikesAsc = await Job.find().sort({ likesCounter: 1 });
    return sortedLikesAsc;
  }

  async getLiksDesc() {
    const sortedLikesDesc = await Job.find().sort({ likesCounter: -1 });
    return sortedLikesDesc;
  }
}

module.exports = { jobMethods };
