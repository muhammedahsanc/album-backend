const { miniSchema } = require("../schemas");

const addSignUpMdl = async ({ username, password }) => {
  try {
    const data = await miniSchema.create({ username, password });
    return data ? data : false;
  } catch (error) {
    console.error(error);
    return error;
  }
};

const getUserName = async (userId) => {
  try {
    const user = await miniSchema.findOne(userId);
    return user ? user.username : null;
  } catch (error) {
    console.error(error);
    return error;
  }
};
const StatusChange = async ({ username }) => {
  try {
    await miniSchema.updateOne({ username }, { $set: { status: true } });
  } catch (error) {
    console.error(error);
    return error;
  }
};
const getUserData = async (userId) => {
  try {
    const user = await miniSchema.findOne(userId).select("-password");
    return user ? user : null;
  } catch (error) {
    console.error(error);
    return error;
  }
};

module.exports = { addSignUpMdl, getUserName, StatusChange,getUserData };
