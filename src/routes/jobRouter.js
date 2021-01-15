const express = require("express");
const router = express.Router();

const { getAllJobs } = require("../controllers/jobCtrl");

router.get("/", getAllJobs);

module.exports = router;
