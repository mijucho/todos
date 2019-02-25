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

function getTodosByPriority(priority, testDb) {
  const db = testDb || connection;
  return db("todos").where("priority", priority);
}

function getTodosByComplete(complete, testDb) {
  const db = testDb || connection;
  return db("todos").where("is_complete", complete);
}

module.exports = {
  getTodos,
  createTodo,
  getTodosByCategory,
  getTodosByPriority,
  getTodosByComplete
};
