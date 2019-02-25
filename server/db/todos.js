const connection = require("./connection");

function getTodos(testDb) {
  const db = testDb || connection;
  return db("todos");
}

function createTodo(todo, testDb) {
  const db = testDb || connection;
  return db("todos").insert(todo);
}
function getTodosByCategory(category, testDb) {
  const db = testDb || connection;

  return db("todos").where("category", category);
}

module.exports = {
  getTodos,
  createTodo,
  getTodosByCategory
};
