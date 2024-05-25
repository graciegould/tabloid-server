const DEBUG = process.env.DEBUG || false;

function debugMsg(message = '', callback = null) {
  if (process.env.DEBUG) {
    console.log(message);
  }
}



module.exports = {
  debugMsg
};