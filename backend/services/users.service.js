const { User } = require('../models');
const bcrypt = require('bcryptjs');
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');

const create = async (body) => {
    if (await User.isEmailTaken(body.email)) throw new ApiError(httpStatus.OK, "Email already taken");
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const loweredUserName = body.username.toLowerCase();
    const user = await User.create({ ...body, username: loweredUserName, password: hashedPassword });
    return user;
}

const findAll = async () => {
    const users = await User.find();
    if (!users || users.length === 0) return [];
    return users;
}

const findById = async (pk) => {
    const user = await User.findById(pk);
    if (!user) return null;
    return user;
}

const findByUsername = async (username) => {
    const user = await User.findOne({ username: username});
    if (!user) return null;
    return user;
}

const findByEmail = async (email) => {
    const user = await User.findOne({ email: email});
    if (!user) return null;
    return user;
}

module.exports = {
    create,
    findAll,
    findById,
    findByUsername,
    findByEmail,
    // update,
    // deleteById,
}