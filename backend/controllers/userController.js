const User = require("../models/user");
const asyncHandler = require("../utils/asyncHandler");
//const ApiError = require("../utils/ApiError");
const { sendsuccessResponse, sendErrorResponse, } = require("../utils/responseHandler");
// Create a new user
const createAdmin = asyncHandler(async (req, res) => {
    const user = await User.create(req.body);
    return sendsuccessResponse(res, 201, "Admin created successfully", user);
    //throw new ApiError(404, "Testing Error");
});
module.exports = {
    createAdmin,
};