class Controller {
  //   CODE_OK = 200;
  //   CODE_CREATED = 201;
  //   CODE_DELETED = 204;
  //   CODE_NOT_FOUND = 404;
  //   CODE_UNAUTHORIZED = 401;
  //   CODE_CONFLICT_DATA = 409;
  //   CODE_INVALID_REQUEST = 422; // request parameters not valid
  //   CODE_INTERNAL_SERVER_ERROR = 500;

  //   INVALID_REQUEST = "Validation Error";
  //   INTERNAL_SERVER_ERROR = "Something Error";
  //   OPERATION_SUCCESS = "Operation Successful.";
  //   UNAUTHORISED = "You are not authorised to do that";

  //common response function
  response(
    code,
    message = null,
    response = null,
    errors = null,
    status_code = null
  ) {
    return {
      code: code,
      message: message,
      data: response,
      errors: errors,
      status_code: status_code,
    };
  }
}
module.exports = Controller;
