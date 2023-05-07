import query from "../db/utils";

const addTodo = async(id, todo) => {
    return query(`UPDATE users set todos = ? WHERE id = ?`, [todo, id])
}

export {addTodo}