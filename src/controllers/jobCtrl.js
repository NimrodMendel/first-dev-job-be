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
    res.send({ error: e });
  }
};

const getJobById = async (req, res) => {
  const jobId = req.params.id;
  if (!jobId) {
    res.send(errors.missingParams);
  }
  try {
    const job = await Job.getById(jobId);
    res.send({ job });
  } catch (e) {
    res.send({ error: e });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.getAll();
    res.send({ jobs });
  } catch (e) {
    res.send({ error: e });
  }
};

const updateJob = async (req, res) => {
  const jid = req.params.id;

  if (!req.body) {
    const job = await Job.getById(jid);
    res.send({ job });
  }

  try {
    const updateDetails = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location,
      salary: req.body.salary,
    };
    const updatedJob = await Job.editJob(jid, updateDetails);
    res.send({ updatedJob });
  } catch (e) {
    res.send({ error: e.message });
  }
};

const getAllLikes = async (req, res) => {
  const jobId = req.params.id;
  if (!jobId) {
    res.send(errors.missingParams);
  }
  try {
    const likes = await Job.getAllLikes(jobId);
    res.send({ likes, counter: likes.length });
  } catch (e) {
    res.send({ error: e });
  }
};

const getJobLocation = async (req, res) => {
  const jobId = req.params.id;
  if (!jobId) {
    res.send(errors.missingParams);
  }
  try {
    const location = await Job.getJobLocation(jobId);
    res.send({ location });
  } catch (e) {
    res.send({ error: e });
  }
};

const getJobSalary = async (req, res) => {
  const jobId = req.params.id;
  if (!jobId) {
    res.send(errors.missingParams);
  }
  try {
    const salary = await Job.getSaraly(jobId);
    res.send({ salary });
  } catch (e) {
    res.send({ error: e });
  }
};

const getSortedBySalaryAsc = async (req, res) => {
  try {
    const sortedBySalaryAsc = await Job.getSalariesAsc();
    res.send({ sortedBySalaryAsc });
  } catch (e) {
    res.send({ error: e });
  }
};

const getSortedBySalaryDesc = async (req, res) => {
  try {
    const sortedBySalaryDesc = await Job.getSalariesDesc();
    res.send({ sortedBySalaryDesc });
  } catch (e) {
    res.send({ error: e });
  }
};

module.exports = {
  addNewJob,
  getJobById,
  updateJob,
  getAllJobs,
  getAllLikes,
  getJobLocation,
  getJobSalary,
  getSortedBySalaryAsc,
  getSortedBySalaryDesc,
};
