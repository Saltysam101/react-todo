import express from 'express';
import { addTodo, selectTodos, updateTodo, deleteTodo } from '../controllers/todo.controller';

const router = express.Router();

router.get("/", async(req, res) => {
    console.log("get")
    let userId = req.query.userId;
    //console.log(req.query)
    let data = await selectTodos(userId);
    res.json(data)
})

router.post("/", async(req, res) => {
    let todos = req.body.todos
    let userId = req.body.userId
    let userTodo = {todo: todos, userID: userId}
    //console.log(req.query)
    let data = await addTodo(userTodo)
    res.json(data)
})

router.put("/", async(req, res) => {
    let todo = req.query.todo;
    let userId = req.query.userId;
    let todoId = req.query.id;
    let data = await updateTodo(todo, userId, todoId);
    res.json(data);
})

router.delete("/", async(req, res) => {
    let userId = req.query.userId;
    let todoId = req.query.id;
    let data = await deleteTodo(userId, todoId)
    res.json(data)
})

export default router;