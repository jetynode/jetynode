const DB = require("../Utils/db");
class Model {
  // Fetch all Data of table
  all(callback) {
    DB.query(`SELECT * FROM ${this.table}`, (err, res) => {
      if (err) callback(err);
      callback(null, res);
    });
  }

  // Fetch all Data of table With Select column option
  get(select, callback) {
    if (Array.isArray(select) === false) {
      throw new Error("Method Error: First Parameter must be array!");
    }

    if (select.length > 0) select = select.join(", ");
    else select = "*";

    DB.query(`SELECT ${select} FROM ${this.table}`, (err, res) => {
      if (err) callback(err);
      callback(null, res);
    });
  }

  // Fetch single Data of table
  find(id, callback) {
    DB.query(`SELECT * FROM ${this.table} WHERE id =${id}`, (err, res) => {
      if (err) callback(err);
      callback(null, res[0]);
    });
  }

  // Update Single Row
  insert(input, callback) {
    let values = [];
    for (const key in input) {
      values.push(`${key} = ?`);
    }
    values = values.join(", ");
    DB.query(
      `INSERT INTO  ${this.table} SET ${values}`,
      Object.values(input),
      (err, res, fields = input) => {
        if (err) callback(err);
        callback(null, { id: res.insertId, ...fields });
      }
    );
  }

  // Update Single Row
  update(id, input, callback) {
    let values = [];
    for (const key in input) {
      values.push(`${key} = ?`);
    }
    values = values.join(", ");
    DB.query(
      `UPDATE ${this.table} SET ${values} WHERE id=${id}`,
      Object.values(input),
      (err, res) => {
        if (err) callback(err);
        callback(null, true);
      }
    );
  }

  delete(id, callback) {
    DB.query(
      ` DELETE FROM ${this.table} WHERE ${this.table}.id =${id}`,
      (err, res) => {
        if (err) callback(err);
        callback(null, true);
      }
    );
  }
}
module.exports = Model;
