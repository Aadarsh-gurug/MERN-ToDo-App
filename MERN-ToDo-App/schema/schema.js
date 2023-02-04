import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    todo:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})

const Todo = mongoose.model('todo',todoSchema)

export default Todo;