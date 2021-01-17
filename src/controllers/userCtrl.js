const User = require("../services/userService");
const {
  hashPassword,
  comparePasswords,
  createToken,
} = require("../utils/helper");
const errors = require("../utils/error");

const test = async (req, res) => {
  console.log(req.cookies.token);
  res.send("pass test");
};

const addUser = async (req, res) => {
  if (!req.body.user) {
    return res.send(errors.missingParams);
  }
  const NewUser = req.body.user;
  if (await User.getByEmail(NewUser.email)) {
    return res.send(errors.emailExist);
  }
  try {
    const hasedPassword = await hashPassword(NewUser.password);
    NewUser.password = hasedPassword;
    await User.add(NewUser);
  } catch (e) {
    return res.send({ error: e });
  }
  res.status(201).send({ success: "user added successfully" });
};

const loginUser = async (req, res) => {
  const user = req.body.user;
  if (!user || !user.email || !user.password) {
    return res.send(errors.missingParams);
  }
  const userDB = await User.getByEmail(user.email);
  if (!userDB) {
    return res.send(errors.incorrectLoginParams);
  }
  try {
    const isEqual = await comparePasswords(user.password, userDB.password);
    if (!isEqual) {
      return res.send(errors.incorrectLoginParams);
    }
    const token = createToken(userDB._id);
    res.cookie("token", token, {
      maxAge: 24 * 60 * 60,
      httpOnly: true,
    });
  } catch (e) {
    console.log(e);
    return res.send({ error: e });
  }
  res.json({ id: userDB._id });
};

const getUserById = async (req, res) => {
  const userDB = await User.getById(req.params.id);
  if (!userDB || userDB.error) {
    return res.send(errors.incorrectID);
  }
  const user = {
    firstName: userDB.firstName,
    lastName: userDB.lastName,
    email: userDB.email,
    phoneNumber: userDB.phoneNumber,
    savedJobs: userDB.savedJobs,
    appliedJobs: userDB.appliedJobs,
  };
  res.json(user);
};

const updateUser = async (req, res) => {
  console.log(req.cookies);
};

const getUserRelatedJobs = async (req, res) => {};

const updateUserRelatedJobs = async (req, res) => {};

module.exports = {
  test,
  addUser,
  loginUser,
  getUserById,
  updateUser,
  getUserRelatedJobs,
  updateUserRelatedJobs,
};
