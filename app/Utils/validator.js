const Validate = require("validatorjs");
const ValidationException = require("./Exceptions/ValidatorException");

class Validator {
  static make(obj, rules) {
    return new Validate(obj, rules);
  }

  //TODO: need to work on it not finish yet
  static makes(obj, rules) {
    let res = new Validate(obj, rules);
    if (res.fails()) {
      throw new ValidationException("Validation error", res.errors.all());
    }
  }
}
module.exports = Validator;
