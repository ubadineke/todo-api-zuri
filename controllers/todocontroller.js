const { v4: uuid } = require("uuid");

//Add Todo
exports.addTodo = (req, res) =>{
    res.send({type:"POST"})
  }

//Update Todo
exports.updateTodo = (req, res) =>{
    res.send({type:"PUT"})
  }

//Delete Todo
exports.deleteTodo = (req, res) =>{
    res.send({type:"DELETE"})
  }

//Fetch All Todos
exports.getTodos = (req, res) =>{
    res.send({type:"GET"})
  }