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
    if (!comparePasswords(user.password, userDB.password)) {
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
};

getCompanyById = async (req, res) => {
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

module.exports = { login, addCompany };
