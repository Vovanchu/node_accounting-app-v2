const expenss = require('express');
const route = expenss.Router();
const controllerUser = require('../controller/usersController.js');

route.get('/', controllerUser.getAllUsers);
route.get('/:id', controllerUser.getUserById);
route.post('/', controllerUser.createUser);
route.delete('/:id', controllerUser.deleteUser);
route.patch('/:id', controllerUser.updateUser);

module.exports = route;
