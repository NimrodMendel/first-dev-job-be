const { Job } = require("../models/Job");

class jobMethods {
  async getById(id) {
    try {
      const jobPost = await Job.findById(id);
      return jobPost;
    } catch (e) {
      return { error: e.message };
    }
  }

  async getAll() {
    try {
      const jobPosts = await Job.find();
      return jobPosts;
    } catch (e) {
      return { error: e.message };
    }
  }

  async addJob(jobDetails) {
    const newJob = { ...jobDetails };
    const addedJob = await Job.create({...newJob});
    return addedJob;
  }

  async getAllLikes(jid) {
    try {
      const { likes } = await Job.findById(jid);
      return likes;
    } catch (e) {
      return { error: e.message };
    }
  }

  async getJobLocation(jid) {
    try {
      const location = await Job.findById(jid, { location: 1 });
      return location;
    } catch (e) {
      return { error: e.message };
    }
  }

  async getSaraly(jid) {
    try {
      const salary = await Job.findById(jid, { salary: 1 });
      return salary;
    } catch (e) {
      return { error: e.message };
    }
  }

  async getSalariesAsc() {
    try {
      const sortedSalariesDesc = await Job.find().sort({ salary: 1 });
      return sortedSalariesDesc;
    } catch (e) {
      return { error: e.message };
    }
  }

  async getSalariesDesc() {
    try {
      const sortedSalariesAsc = await Job.find().sort({ salary: -1 });
      return sortedSalariesAsc;
    } catch (e) {
      return { error: e.message };
    }
  }

  async getLiksAsc() {
    try {
      const sortedLikesAsc = await Job.find().sort({ likesCounter: 1 });
      return sortedLikesAsc;
    } catch (e) {
      return { error: e.message };
    }
  }

  async getLiksDesc() {
    try {
      const sortedLikesDesc = await Job.find().sort({ likesCounter: -1 });
      return sortedLikesDesc;
    } catch (e) {
      return { error: e.message };
    }
  }
}

module.exports = { jobMethods };
