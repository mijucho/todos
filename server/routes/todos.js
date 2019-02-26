const express = require("express");
const router = express.Router();
const { getTodos } = require("../db/todos");
const { createTodo } = require("../db/todos");

//GET  /api/v1/
router.get("/", (req, res) => {
  getTodos()
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
});

// POST /api/v1/todo
router.post("/", (req, res) => {
  const todo = req.body;
  console.log(todo);

  createTodo(todo)
    .then(todo => {
      res.json(todo);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
});

module.exports = router;
