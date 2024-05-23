const mongoose = require('mongoose');

const streamSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
});

const Streams = mongoose.model('Streams', streamSchema);

module.exports = Streams;
