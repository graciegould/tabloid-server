const mongoose = require('mongoose');

const BaseSchema = new mongoose.Schema({}, { strict: false });

BaseSchema.statics.filter = async function(filters) {
    try {
        return await this.find(filters);
    } catch (err) {
        throw new Error(err);
    }
}

BaseSchema.statics.getSingle = async function(filters) {
    try {
        return await this.findOne(filters);
    } catch (err) {
        throw new Error(err);
    }
}

BaseSchema.statics.fromId = async function(_id) {
    try {
        return await this.findOne(_id);
    } catch (err) {
        throw new Error(err);
    }
}


module.exports = BaseSchema;

