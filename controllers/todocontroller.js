const Todo = require('../models/todomodel');
const { v4: uuid } = require("uuid");

//Add Todo
exports.addTodo = (req, res, next) =>{
  Todo.create(req.body).then( todo => {
    res.send(todo)
  }).catch(next); 
  }

//Update Todo
exports.updateTodo = (req, res) =>{
  const id = req.params.id;
  Todo.findByIdAndUpdate({_id:id}, req.body).then(() =>{
    Todo.findOne({_id:id}).then((todo) => {
      res.send(todo);
    })
  })
  }

//Delete Todo
exports.deleteTodo = (req, res) =>{
  const id = req.params.id;
  Todo.findByIdAndRemove({_id:id}).then((todo) => {
    res.send(todo);
  });
  }

//Fetch All Todos
exports.getTodos = (req, res) =>{
    Todo.find({}).then((todo) => {
      res.send(todo);
    })
  }