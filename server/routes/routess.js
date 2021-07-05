const express = require('express');
const route = express.Router()

const services = require('../services/servicess');
const controller = require('../crud/crudd');

/**
 *  @description Root Route
 *  @method GET /
 */
route.get('/', services.homeRoutes);

/**
 *  @description add users
 *  @method GET /add-user
 */
route.get('/adduser', services.add_user)

/**
 *  @description for update user
 *  @method GET /update-user
 */
route.get('/updateuser', services.update_user)


// API
route.post('/api/users', controller.create);
route.get('/api/users', controller.find);
route.put('/api/users/:id', controller.update);
route.delete('/api/users/:id', controller.delete);


module.exports = route