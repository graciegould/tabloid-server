const mongoose = require('mongoose');
const BaseSchema = require('./base-schema');

const streamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});
streamSchema.add(BaseSchema);

const Streams = mongoose.model('Streams', streamSchema);

module.exports = Streams;
