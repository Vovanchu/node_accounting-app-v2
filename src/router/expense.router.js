const expenss = require('express');
const route = expenss.Router();
const controllerExpense = require('../controller/expensesController.js');

route.get('/', controllerExpense.getAllExpenses);
route.get('/:id', controllerExpense.getExpenseById);
route.post('/', controllerExpense.createExpense);
route.delete('/:id', controllerExpense.deleteExpense);
route.patch('/:id', controllerExpense.updateExpense);

module.exports = route;
