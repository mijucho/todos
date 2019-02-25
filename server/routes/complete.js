const express = require("express");
const router = express.Router();
const { getTodosByComplete } = require("../db/todos");

router.get("/:complete", (req, res) => {
  const complete = req.params.complete;
  console.log(complete);
  getTodosByComplete(complete)
    .then(todos => {
      res.json(todos);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong" });
    });
});

module.exports = router;
