const express = require("express");
const router = express.Router();
const { getTodosByCategory } = require("../db/todos");

// GET/api/v1/todos/category
router.get("/:category", (req, res) => {
  const category = req.params.category;
  getTodosByCategory(category)
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
});

module.exports = router;
