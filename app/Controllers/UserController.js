const User = require("../Models/User").mkObj();
const AppError = require("../Utils/appError");
const Validator = require("../Utils/validator");

// Display list of all Users.
exports.index = function (req, res, next) {
  // Fetch All Users
  User.all(function (err, data) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      code: 200,
      message: "Success",
      data: data,
      error: null,
    });
  });
};

// Display detail page for a specific User.
exports.view = function (req, res, next) {
  // Get Single User Data
  User.find(req.params.id, function (err, data) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      code: 200,
      message: "Success",
      data: data,
      error: null,
    });
  });
};

// Handle User create on POST.
exports.store = function (req, res, next) {
  let input = req.body;

  // TODO: work in progress
  // Validator.makes(input, {
  //   name: "required",
  //   released_year: "required",
  // });

  //Validate Request Params
  let request = Validator.make(input, {
    name: "required|string",
    email: "email|required",
  });
  if (request.fails()) {
    res.json(
      { code: 413, message: "Validation error", error: request.errors.all() },
      413
    );
  }

  //Insert New User Row
  User.insert(input, function (err, data) {
    if (err) return next(new AppError(err));
    res.status(201).json({
      code: 201,
      message: "Success",
      data: data,
      error: null,
    });
  });
};

// Handle User update on POST.
exports.update = function (req, res, next) {
  let params = {
    name: "newLang",
    released_year: 2004,
  };

  // Update User Row
  User.update(req.params.id, params, function (err, data) {
    if (err) return next(new AppError(err));
    if (data === true)
      res.status(200).json({
        code: 200,
        message: "Updated",
        data: true,
        error: null,
      });
  });
};

// Handle User delete on POST.
exports.destory = function (req, res) {
  // Delete User
  User.delete(req.params.id, function (err, data) {
    if (err) return next(new AppError(err));
    res.status(200).json({
      code: 200,
      message: "Success",
      data: data,
      error: null,
    });
  });
};
