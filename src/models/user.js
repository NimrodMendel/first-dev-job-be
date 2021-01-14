class User {
    constructor() {
        this.db = {}
    }
    getById = (id) => {
        return this.db.get(id);
    }
    add = (user) => {
        return this.db.add(user);
    }
    updateById = (id, updatedInfo) => {
        return this.db.update(id, updatedInfo)
    }
    updateRealatedJobs = (updatedInfo) => {
        return this.db.updateRealatedJobs(updatedInfo);
    }

}

module.exports = new User;