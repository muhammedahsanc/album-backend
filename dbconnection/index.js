const { connect } = require("mongoose");
require("dotenv").config();
const dbConnection = async () => {
  try {
    if (await connect(process.env.DBURL))
      console.log("DB Connected Successfully");
    else throw new Error("ERR DB Connection");
  } catch (error) {
    console.error(error);
    // next(error); 
  }
};
module.exports = { dbConnection };
