const express = require("express");
const router = express.Router();
const { auth } = require("../middlewares/auth");

const {
  login,
  addCompany,
  getCompanyById,
  updateCompany,
  getComanyJobs,
} = require("../controllers/companyCtrl");

router.post("/signup", addCompany);

router.post("/login", login);

// all routes below protected to authenticated user
router.get("/:id", auth, getCompanyById);

router.put("/:id", auth, updateCompany);

router.get("/:id/jobs", auth, getComanyJobs);

/*
router.put("/:id/jobs", auth, updateUserRelatedJobs);

router.put("/:id/jobs", updateUserRelatedJobs);
*/
module.exports = router;
