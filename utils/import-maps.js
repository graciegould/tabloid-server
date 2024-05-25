const express = require('express');
const mongoose = require('mongoose');
const {transaction} = require('./query');
const {CODES, responses} = require('../tabloid-core/http/response');
const {validateInputs} = require('./validation');
const {debugMsg} = require('./debug');
const router = express.Router();


const requestModules = {
    express,
    router,
    mongoose,
    transaction,
    CODES,
    responses,
    validateInputs,
}
module.exports = {
    requestModules
};