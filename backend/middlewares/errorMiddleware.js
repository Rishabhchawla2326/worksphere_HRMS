const {sendErrorResponse} = require("../utils/responseHandler");
const errorHandler = (err,req,res,next) => {
       const statusCode = err.statusCode || 500;
       return sendErrorResponse(res,statusCode,err.message || "Internal Server Error");
};

module.exports = errorHandler;
