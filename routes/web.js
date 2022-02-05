const express = require("express");
const Router = express.Router();
const HomeController = require('../app/Controllers/HomeController');

//Home Page
Router.get('/', HomeController.index);
// Router.get('/user/:id', UserController.view);
// Router.post('/user', UserController.store);
// Router.put('/user', UserController.update);
// Router.delete('/user/:id', UserController.destory);

module.exports = Router;