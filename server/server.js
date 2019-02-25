const express = require("express");
const path = require("path");
const server = express();
const categoryRoutes = require("./routes/category");
const todosRoutes = require("./routes/todos.js");
const priorityRoutes = require("./routes/priority");
const completeRoutes = require("./routes/complete");

server.use(express.static(path.join(__dirname, "..", "public")));
server.use(express.json());

server.use("/api/v1/todos", todosRoutes);
server.use("/api/v1/todos/category", categoryRoutes);
server.use("/api/v1/todos/priority", priorityRoutes);
server.use("/api/v1/todos/complete", completeRoutes);

module.exports = server;
