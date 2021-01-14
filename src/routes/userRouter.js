const express = require('express');
const router = express.Router();

const { addUser, loginUser, getUserById, updateUser, getUserRelatedJobs,
    updateUserRelatedJobs } = require("../controllers/userCtrl");

router.post('/signup', addUser);

router.post('/login', loginUser);

// all below will be protected to authorized user
router.get('/:id', getUserById);

router.put('/:id', updateUser)

router.get('/:id/jobs', getUserRelatedJobs)

router.put('/:id/jobs', updateUserRelatedJobs)


module.exports = router;