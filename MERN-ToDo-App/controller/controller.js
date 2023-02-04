import Todo from "../schema/schema.js";


export const getTodos = async(request,response)=>{
    try {
        const todos = await Todo.find({}).sort({'date': -1})
        response.status(200).json(todos)
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}

export const saveTodo = async(request,response)=>{
    try {
        const todo = await Todo(request.body)
        await todo.save()
        response.status(201).json(todo)
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}

export const deleteTodo = async(request,response)=>{
    try {
        const todo = await Todo.findByIdAndDelete(request.params.id)
        response.status(200).json(todo)
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}

export const getTodo = async(request,response)=>{
    try {
        const todo = await Todo.findById(request.params.id)
        response.status(200).json(todo)
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}

export const editTodo = async(request,response)=>{
    try {
        const data = await Todo(request.body)
        const todo = await Todo.findByIdAndUpdate(request.params.id,data)
        response.status(200).json(todo)
    } catch (error) {
        response.status(404).json({message:error.message})
    }
}
