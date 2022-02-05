// TODO: Need to work on this Class
const { Response } = require("express");
class ValidationException {
  constructor(message = null, errors) {
    Response.send(413).json({
      code: 413,
      message: "Validation Error",
      error: errors,
    });
  }
}
module.exports = ValidationException;
