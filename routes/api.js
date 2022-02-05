const express = require("express");
const Router = express.Router();
const UserController = require("../app/Controllers/UserController");

// User Module
Router.get("/user", UserController.index);
Router.get("/user/:id", UserController.view);
Router.post("/user", UserController.store);
Router.put("/user/:id", UserController.update);
Router.delete("/user/:id", UserController.destory);

module.exports = Router;
