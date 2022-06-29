const mongoose = require('mongoose')
const Schema = mongoose.Schema

//Create Todo Schema & Model 
const TodoSchema = new Schema({
    title:{
        type:String,
        required:[true, 'Title Field is Required']
    },
    description:{
        type:String,
        required:[true, 'Type in your Description']
    },
},{timestamps: true});

const Todo = mongoose.model('todo', TodoSchema);

module.exports = Todo;