
const mongoose = require('mongoose');
const {debugMsg} = require('./debug');

async function transaction(callback) {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        debugMsg("Beginning transaction...");
        response = await callback(session);
        await session.commitTransaction();
        debugMsg("Transaction committed.");
        return response;
    } catch (error) {
        debugMsg("Transaction aborted.");
        await session.abortTransaction();
        throw error;
    } finally {
        session.endSession();
    }
}

const query = {
    transaction: transaction
}
module.exports = query;