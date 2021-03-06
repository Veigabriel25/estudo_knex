const express = require('express');
const UserController = require('./controllers/UserController');
const ProjectController = require('./controllers/ProjectController');

const routes = express.Router();

routes
  .get('/users', UserController.index)
  .post('/users', UserController.create)
  .put('/users/:id', UserController.update)
  .delete('/users/:id', UserController.delete)
  .get('/projects', ProjectController.index)
  .post('/projects', ProjectController.create)


module.exports = routes;