const { miniSchema } = require("../schemas");

const addLoginMdl = async (userId) => {
  console.log(userId,"mooooodel looooogin");
  try {
    const user = await miniSchema.findOne(userId);
    console.log(user);
    return user; 
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = { addLoginMdl };
