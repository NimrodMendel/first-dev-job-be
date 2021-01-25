const { companyMethods } = require("../database/companyDB");

class Company {
  constructor() {
    this.db = new companyMethods();
  }

  getById = (cid) => {
    return this.db.get(cid);
  };

  getByEmail = (email) => {
    return this.db.getByEmail(email);
  };

  add = (companyDetails) => {
    return this.db.add(companyDetails);
  };

  update = (cid, companyDetails) => {
    return this.db.updateCopmanyProfile(cid, companyDetails);
  };
}

module.exports = new Company();
