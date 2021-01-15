const User = require('../services/userService');
const { hashPassword, comparePasswords } = require('../utils/helper');

const addUser = async (req, res) => {
    const NewUser = req.body.user;
    if (await User.getByEmail(NewUser.email)) {
        return res.send({ error: "email already exists" })
    }
    try {
        const hasedPassword = await hashPassword(NewUser.password);
        NewUser.password = hasedPassword;
        const userDB = await User.add(NewUser);
        console.log(userDB);

    } catch (e) {
        console.log(e);
    }
    res.send("added user");
}

const loginUser = async (req, res) => {

}

const getUserById = async (req, res) => {
    const user = await User.getById(req.params.id);
    //after adding users with password need to add here object 
    //with only the relevent fields to return
    res.send(user);
}

const updateUser = async (req, res) => {

}

const getUserRelatedJobs = async (req, res) => {

}

const updateUserRelatedJobs = async (req, res) => {

}

module.exports = {
    addUser, loginUser, getUserById,
    updateUser, getUserRelatedJobs, updateUserRelatedJobs
};