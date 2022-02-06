const Model = require("./Model");
class User extends Model {
  table = "users";
  fillable = ["name", "email", "password"];

  constructor() {
    super();
  }

  static mkObj() {
    if (!this.obj) {
      this.obj = new User();
    }
    return this.obj;
  }
}
module.exports = User;
