const { Job } = require("../models/Job");

class jobsMethods {
  async getById(jid) {
    try {
      const jobPost = await Job.findById(jid);
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
      const addedJob = await Job.create(newJob);
      res.status(201).send({ addedJob });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }

  async getAllLikes(jid) {
    try {
      const { likes, likesCounter } = await Job.findById(jid);
      res.status(200).send({
        likes,
        likesCounter,
      });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }

  async getJobLocation(jid) {
    try {
      const location = await Job.findById(jid, { location: 1 });
      res.status(200).send({ location });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }

  async getSaraly(jid) {
    try {
      const salary = await Job.findById(jid, { salary: 1 }); //  Get only the salary
      res.status(200).send({ salary });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }

  async getSalariesAsc() {
    try {
      const sortedSalariesDesc = await Job.find().sort({ salary: 1 }); //  Get only the salary
      res.status(200).send({ sortedSalariesDesc });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }

  async getSalariesDesc() {
    try {
      const sortedSalariesAsc = await Job.find().sort({ salary: -1 }); //  Get only the salary
      res.status(200).send({ sortedSalariesAsc });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }

  async getLiksAsc() {
    try {
      const sortedLikesAsc = await Job.find().sort({ likesCounter: 1 }); //  Get only the salary
      res.status(200).send({ sortedLikesAsc });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }

  async getLiksDesc() {
    try {
      const sortedLikesDesc = await Job.find().sort({ likesCounter: -1 }); //  Get only the salary
      res.status(200).send({ sortedLikesDesc });
    } catch (e) {
      res.status(400).send({ error: e });
    }
  }
}

module.exports = { jobsMethods };
