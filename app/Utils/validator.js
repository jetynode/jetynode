const Validate = require("validatorjs");
const ValidationException = require("./Exceptions/ValidatorException");

class Validator {
  static make(obj, rules) {
    return new Validate(obj, rules);
  }

  static makes(obj, rules) {
    let res = new Validate(obj, rules);
    if (res.fails()) {
      throw new ValidationException(res.errors.all());
    }
  }
}
module.exports = Validator;
