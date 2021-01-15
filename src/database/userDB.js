const { ObjectID } = require('mongodb');
const { User } = require('../models/User');

class userMethods {

    async get(id) {
        const user = await User.findOne({ _id: ObjectID(id) });
        return user;
    }

    async getByEmail(email) {
        const user = await User.findOne({ email: email });
        return user;
    }

    async add(user) {
        const userDB = await User.create({ ...user });
        return userDB;
    }
}


module.exports = { userMethods }