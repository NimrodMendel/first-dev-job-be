const e = require("express");
const { Company } = require("../models/Company");

class companyMethods {
  async get(cid) {
    try {
      const company = await Company.findOne(cid);
      return company;
    } catch (e) {
      return { error: "ID doesn't exist" };
    }
  }

  async getByEmail(email) {
    const company = await Company.findOne({ email: email });
    return company;
  }

  async add(company) {
    try {
      const addedCompany = await Company.create({ ...company });
      return addedCompany;
    } catch (e) {
      return { error: e.message };
    }
  }

  async updateCopmanyProfile(cid, company) {
    try {
      const updatedCompany = await Company.findOneAndUpdate(
        { _id: cid },
        { ...company },
        {
          new: true,
          omitUndefined: true,
          useFindAndModify: false,
          runValidators: true,
        }
      );
      return updatedCompany;
    } catch (e) {
      return { error: e.message };
    }
  }

  async getJobsPostedByCompany(cid) {
    try {
      const companyJobs = await Company.findById(cid, { jobs: 1 });
      return jobs;
    } catch (e) {
      return { error: e.message };
    }
  }
}

module.exports = { companyMethods };
