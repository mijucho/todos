const express = require("express");
const path = require("path");
const server = express();

const todosRoutes = require("./routes/todos.js");

server.use(express.static(path.join(__dirname, "..", "public")));
server.use(express.json());

server.use("/api/v1/todos/priority", todosRoutes);
// server.use("./api/v1/todos/category/:category", categoryRoutes);
// server.use("./api/v1/todos/categor/:is-completed", completeRoutes);

module.exports = server;
