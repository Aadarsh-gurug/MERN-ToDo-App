import express from "express";
import { getTodos, saveTodo, deleteTodo, getTodo, editTodo } from "../controller/controller.js";
const route = express.Router()

route.get('/all',getTodos)
route.post('/add',saveTodo)
route.delete('/delete/:id',deleteTodo)
route.get('/:id',getTodo)
route.put('/edit/:id',editTodo)

export default route 