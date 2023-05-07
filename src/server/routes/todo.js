import express from 'express';
import { addTodo } from '../controllers/todo.controller';

const router = express.Router();

router.post("/", async(req, res) => {
    let todos = req.body.todos
    let id = req.body.id
    console.log(req.body)
    let data = await addTodo(id, todos)
    res.json(data)
})

export default router;