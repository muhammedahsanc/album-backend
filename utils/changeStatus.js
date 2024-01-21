const { SignUpMdl } = require("../model");

module.exports = async (username) =>{
    await SignUpMdl.StatusChange({ username });
}