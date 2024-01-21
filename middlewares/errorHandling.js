require("dotenv").config();
const ErrorHandlingMiddleware = (err, req, res, next) => {
  console.log(err.message)
  res.status(500).json({
    message: err.message,
    stack: 'development' == "development" ? err.stack : null,
    
  });
};
module.exports = ErrorHandlingMiddleware;
