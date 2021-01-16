const { jobsMethods } = require("../database/jobsDB");
const errors = require("../utils/error");

const getJobById = async (req, res) => {
  const { jobId } = req.body;

  if (!jobId) {
    res.status(400).send(errors.missingParams);
  }

  try {
      
  } catch (error) {
    res.status(400).send({ error });
  }
};
