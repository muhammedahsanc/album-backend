const { connect } = require("mongoose");
require("dotenv").config();
const dbConnection = async () => {
  try {
    if (await connect('mongodb+srv://muhammedahsanc22:oPRrl4dxnvoFRNcu@cluster0.d8xiqy7.mongodb.net/'))
      console.log("DB Connected Successfully");
    else throw new Error("ERR DB Connection");
  } catch (error) {
    console.error(error);
    // next(error); 
  }
};
module.exports = { dbConnection };
