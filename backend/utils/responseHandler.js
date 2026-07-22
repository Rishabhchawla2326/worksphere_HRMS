const sendsuccessResponse = (
    res,
    statusCode=200,
    message="Request successful",
    data=null ,
    meta=null
) => {
    return res.status(statusCode).json({
        success: true,
        message,
        data,
        ...(meta && {meta}),
    });
};

const sendErrorResponse = (
    res,
    statusCode=500,
    message="Something went wrong",
    errors=null
) => {
    return res.status(statusCode).json({
        success: false,
        message,
        errors,
    });
};
module.exports = {
    sendsuccessResponse,
    sendErrorResponse,
};