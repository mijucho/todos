const express = require("express");
const router = express.Router();
const { getTodosByPriority } = require("../db/todos");

router.get("/:priority", (req, res) => {
  const priority = req.params.priority;
  getTodosByPriority(priority)
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
});

module.exports = router;
