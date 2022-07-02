const express = require("express");

const router = express.Router();
const controller = require('../controllers/todocontroller');

//Add a Todo
router.post('/todos', controller.addTodo);

//Update Todo 
router.put('/updatetodo/:id', controller.updateTodo);

//Delete Todo 
router.delete('/deletetodo/:id', controller.deleteTodo);

//Get All Todo Tasks
router.get('/todos', controller.getTodos);


module.exports = router;