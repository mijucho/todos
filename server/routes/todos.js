const express = require("express");
const router = express.Router();

//GET  /api/v1/todos
router.get("/", (req, res) => {
  res.json([
    {
      id: 1,
      task: "buy milk",
      category: "home"
    }
  ]);
});

// POST /api/v1/todos
router.post("/", (req, res) => {
  res.json({ id: 2 });
});

// GET/api/v1/priority
router.get("/:priority", (req, res) => {
  res.json([
    {
      id: 1,
      task: "visit DEV",
      category: "work"
    }
  ]);
});

module.exports = router;
