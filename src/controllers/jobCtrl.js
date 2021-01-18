const Job = require("../services/jobService");
const errors = require("../utils/error");

const addNewJob = async (req, res) => {
  const newJob = req.body.job;
  if (!newJob) {
    return res.send(errors.missingParams);
  }
  try {
    const addedJob = await Job.addJob(newJob);
    if (addedJob) {
      res.status(201).send({ id: addedJob._id });
    }
  } catch (e) {
    res.status(400).send({ error: e });
  }
};

const getJobById = async (req, res) => {
  const jobId = req.params.id;
  if (!jobId) {
    res.status(400).send(errors.missingParams);
  }
  try {
    const jobDB = await Job.getById(jobId);
    res.send({ jobDB });
  } catch (e) {
    res.status(400).send({ error: e });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.getAll();
    res.send({ jobs });
  } catch (e) {
    res.status(400).send({ error: e });
  }
};

const getAllLikes = async (req, res) => {
  const jobId = req.params.id;
  if (!jobId) {
    res.status(400).send(errors.missingParams);
  }
  try {
    const likes = await Job.getAllLikes(jid);
    res.status(200).send({ likes, counter: likes.length });
  } catch (e) {
    res.status(400).send({ error: e });
  }
};

const getJobLocation = async (req, res) => {
  const jid = req.params.id;

  if (!jid) {
    res.status(400).send(errors.missingParams);
  }

  try {
    const location = await Job.getJobLocation(jid);
    res.status(200).send({ location });
  } catch (e) {
    res.status(400).send({ error: e });
  }
};

const getJobSalary = async (req, res) => {
  const jid = req.params.id;

  if (!jid) {
    res.status(400).send(errors.missingParams);
  }

  try {
    const salary = await Job.getSaraly(jid);
    res.status(200).send({ salary });
  } catch (e) {
    res.status(400).send({ error: e });
  }
};

const getSortedBySalaryAsc = async (req, res) => {
  try {
    const sortedBySalaryAsc = await Job.getSalariesAsc();
    res.status(200).send({ sortedBySalaryAsc });
  } catch (e) {
    res.status(400).send({ error: e });
  }
};

const getSortedBySalaryDesc = async (req, res) => {
  try {
    const sortedBySalaryDesc = await Job.getSalariesDesc();
    res.status(200).send({ sortedBySalaryDesc });
  } catch (e) {
    res.status(400).send({ error: e });
  }
};

module.exports = {
  addNewJob,
  getJobById,
  getAllJobs,
  getAllLikes,
  getJobLocation,
  getJobSalary,
  getSortedBySalaryAsc,
  getSortedBySalaryDesc,
};
