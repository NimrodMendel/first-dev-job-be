const express = require("express");
const router = express.Router();

const {
  addNewJob,
  getJobById,
  getAllJobs,
  getAllLikes,
  getJobLocation,
  getJobSalary,
  getSortedBySalaryAsc,
  getSortedBySalaryDesc,
} = require("../controllers/jobCtrl");

router.post("/", addNewJob);

router.get("/", getAllJobs);

router.get("/:id", getJobById);

router.get("/:id/likes", getAllLikes);

router.get("/:id/location", getJobLocation);

router.get("/:id/salary", getJobSalary);

router.get("/salaryasc", getSortedBySalaryAsc);

router.get("/salarydesc", getSortedBySalaryDesc);

module.exports = router;
