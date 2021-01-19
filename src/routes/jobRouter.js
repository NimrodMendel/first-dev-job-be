const express = require("express");
const router = express.Router();

const {
  addNewJob,
  getJobById,
  updateJob,
  getAllJobs,
  getAllLikes,
  getJobLocation,
  getJobSalary,
  getSortedBySalaryAsc,
  getSortedBySalaryDesc,
} = require("../controllers/jobCtrl");

router.get("/salaryasc", getSortedBySalaryAsc);

router.get("/salarydesc", getSortedBySalaryDesc);

router.post("/", addNewJob);

router.get("/", getAllJobs);

router.get("/:id", getJobById);

router.put("/:id", updateJob);

router.get("/:id/likes", getAllLikes);

router.get("/:id/location", getJobLocation);

router.get("/:id/salary", getJobSalary);

module.exports = router;
