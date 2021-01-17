const Job = require("../services/jobService");
const errors = require("../utils/error");

const getJobById = async (req, res) => {
  const { jobId } = req.params;

  if (!jobId) {
    res.status(400).send(errors.missingParams);
  }

  try {
    const job = await Job.getById(jobId);
    res.status(200).send({ job });
  } catch (error) {
    res.status(400).send({ error });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.getAll();
    res.status(200).send({ jobs });
  } catch (error) {
    res.status(400).send({ error });
  }
};

const addNewJob = async (req, res) => {
  const { title, description, location, company, salary } = req.body;

  //  Check whether one of the params are missing
  if (!(title && description && location && company && salary)) {
    res.status(400).send(errors.missingParams);
  }

  try {
    const newJob = {
      title,
      description,
      location,
      company,
      salary,
    };

    //console.log(newJob);

    const addedJob = await Job.addJob(newJob);

    console.log(addedJob);

    if (addedJob) {
      res.status(201).send({ addJob });
    }
  } catch (error) {
    res.status(400).send({ error });
  }
};

const getAllLikes = async (req, res) => {
  const jid = req.params.id;

  if (!jid) {
    res.status(400).send(errors.missingParams);
  }

  try {
    const likes = await Job.getAllLikes(jid);
    res.status(200).send({ likes, counter: likes.length });
  } catch (error) {
    res.status(400).send({ error });
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
  } catch (error) {
    res.status(400).send({ error });
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
  } catch (error) {
    res.status(400).send({ error });
  }
};

const getSortedBySalaryAsc = async (req, res) => {
  try {
    const sortedBySalaryAsc = await Job.getSalariesAsc();
    res.status(200).send({ sortedBySalaryAsc });
  } catch (error) {
    res.status(400).send({ error });
  }
};

const getSortedBySalaryDesc = async (req, res) => {
  try {
    const sortedBySalaryDesc = await Job.getSalariesDesc();
    res.status(200).send({ sortedBySalaryDesc });
  } catch (error) {
    res.status(400).send({ error });
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
