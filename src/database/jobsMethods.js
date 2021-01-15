const { Job } = require("../models/Job");

class jobsMethods {
  async getById(id) {
    try {
      const jobPost = await Job.findById(id);
      res.status(200).send({ jobPost });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }

  async getAll() {
    try {
      const jobPosts = await Job.find();
      res.status(200).send({ jobPosts });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }

  async addJob(jobDetails) {
    try {
      const newJob = { ...jobDetails };
      const addedJob = Job.create(newJob);
      res.status(201).send({ addedJob });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }
}

module.exports = { jobsMethods };
