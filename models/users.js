const mongoose = require('mongoose');
const BaseSchema = require('./base-schema');
const usersSchema = new mongoose.Schema({
    username: { type: String, required: true }
});
usersSchema.add(BaseSchema);

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
