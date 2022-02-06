class ValidationException {
  constructor(errors) {
    _res.status(412).json({
      code: 412,
      message: "Validation Error",
      error: errors,
    });
  }
}
module.exports = ValidationException;
