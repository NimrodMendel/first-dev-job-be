const Company = require("../services/companyService");
const {
  hashPassword,
  comparePasswords,
  createToken,
} = require("../utils/helper");
const errors = require("../utils/error");

const addCompany = async (req, res) => {
  const { email, password, name, location, logo } = req.body.company;

  if (!(email && password && name && location && logo)) {
    return res.send(errors.missingParams);
  }

  try {
    const hashedPassword = await hashPassword(password);
    const newCompany = {
      email,
      password: hashedPassword,
      name,
      location,
      logo,
    };
    const created = await Company.add(newCompany);
    res.status(201).send({ created });
  } catch (err) {
    res.send({ error: err.message });
  }
};

const login = async (req, res) => {
  if (!(req.body.email && req.body.password)) {
    return res.send(errors.missingParams);
  }

  const companyExistsInDb = await Company.getByEmail(req.body.email);

  if (!companyExistsInDb) {
    return res.send(errors.incorrectLoginParams);
  }
  try {
    if (!comparePasswords(req.body.password, companyExistsInDb.password)) {
      return res.send(errors.incorrectLoginParams);
    }

    const token = createToken(companyExistsInDb._id);
    res.cookie("token", token, {
      maxAge: 24 * 60 * 60 * 100,
      httpOnly: true,
    });
  } catch (err) {
    res.send({ error: err.message });
  }

  res.json({ id: companyExistsInDb._id });
};

const getCompanyById = async (req, res) => {
  const { cid } = req.params;

  if (!cid) {
    return res.send(errors.missingParams);
  }

  try {
    const company = await Company.getById(cid);
    res.status(200).send({ company });
  } catch (err) {
    res.send({ error: err.message });
  }
};

const updateCompany = async (req, res) => {
  const detailsToUpdate = req.body;
  const { cid } = req.params.id;

  if (!detailsToUpdate) {
    const company = await Company.getById(cid);
    res.send({ company });
  }

  try {
    if (detailsToUpdate.password) {
      const hashedPassword = await hashPassword(detailsToUpdate.password);
      detailsToUpdate.password = hashedPassword;
    }
    const updatedCopmany = await Company.update(cid, detailsToUpdate);
    res.send({ updatedCopmany });
  } catch (err) {
    res.send({ error: err.message });
  }
};

const getComanyJobs = async (req, res) => {
  const { cid } = req.params.id;

  try {
    const copmanyJobs = await Company.getCompanyJobs(cid);
    res.send({ copmanyJobs });
  } catch (err) {
    res.send({ error: err.message });
  }
};

module.exports = {
  login,
  addCompany,
  getCompanyById,
  updateCompany,
  getComanyJobs,
};
