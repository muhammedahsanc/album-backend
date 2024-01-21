const changeStatus = require("../utils/changeStatus");

const activationLink = async (req, res) => {
  try {
    await changeStatus(req.params.id);
    return res.status(200).json({});
  } catch (error) {
    console.error(error);
    next(error);
  }
};

module.exports = activationLink;
