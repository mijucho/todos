const express = require("express");
const router = express.Router();
const { getTodos } = require("../db/todos");

//GET  /api/v1/todos/priority
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

// POST /api/v1/todos/priority
router.post("/", (req, res) => {
  console.log("New Todos", req.params.priority, "todos:", req.body.task);
  res.json({ id: 2 });
});

module.exports = router;
