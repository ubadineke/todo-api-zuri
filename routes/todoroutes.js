const express = require("express");

const router = express.Router();
const controller = require('../controllers/todocontroller');

//Add a Todo
router.post('/addtodo', todocontroller.addTodo);

//Update Todo 
router.put('/updatetodo/:id', todocontroller.updateTodo);

//Delete Todo 
router.delete('/deleteTodo/:id', todocontroller.deleteFlight);

//Get All Todo Tasks
router.get('/todos', todocontroller.getTodos);


module.exports = router;