const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const hashPassword = async (password) => {
    try {
        const hasedPassword = await bcrypt.hash(password, 10);
        return hasedPassword;
    } catch (e) {
        // return { error: e };
        throw new Error(e);
    }
}

const comparePasswords = async (password, hasedPassword) => {
    try {
        if (await bcrypt.compare(password, hasedPassword)) {
            return true;
        }
        return false;
    } catch (e) {
        // return { error: e };
        throw new Error(e);
    }
}

module.exports = { hashPassword, comparePasswords }