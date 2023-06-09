import query from "../db/utils";

const addTodo = async(todos) => {
    return query(`INSERT INTO todos SET ?`, [todos])
}

const selectTodos = async(userId) => {
    return query("SELECT * FROM todos WHERE userID = ?", [userId])
}

const updateTodo = async(todo, userId, id) => {
    return query("UPDATE todos SET todo = ? WHERE userID = ? AND id =?", [todo, userId, id])
}

const deleteTodo = async(userId, id) => {
    return query("DELETE FROM todos WHERE userID = ? AND id = ?", [userId, id])
}

export {addTodo, selectTodos, updateTodo, deleteTodo}