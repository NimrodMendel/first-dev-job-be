const user = require('../services/userService');

const addUser = async (req,res) => {

} 

const loginUser = async (req,res) => {

}

const getUserById = async (req,res) => {
    const u = await user.getById(req.params.id)
    // console.log(u);
    res.send("fgf");
} 

const updateUser = async (req,res) => {

} 

const getUserRelatedJobs = async (req,res) => {

} 

const updateUserRelatedJobs = async (req,res) => {

} 

module.exports = {
    addUser, loginUser ,getUserById,
    updateUser, getUserRelatedJobs, updateUserRelatedJobs
};