const express = require("express");

const router = express.Router();

let tasks = [];

router.get("/", (_req, res) => res.status(200).json(tasks));

router.post("/", (req, res) => {
  const id = tasks.length + 1;
  const { name, completed } = req.body;
  if (!name) {
    return res.status(400).json({
      error: {
        code: "task_bad_request",
        message: "solicitud mal formada",
      },
    });
  }

  const task = {
    id,
    name,
    completed: completed || false,
  };

  tasks = [...tasks, task];
  return res.status(201).json(task);
});

router.get("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    return res.status(404).json({
      error: {
        code: "task_not_found",
        message: "La tarea no existe",
      },
    });
  }
  return res.status(200).json(task);
});

router.put("/:id", (req, res) => {
  const id = Number(req.params.id);
  const task = tasks.find((task) => task.id === id);
  if (!task) {
    return res.status(404).json({
      error: {
        code: "task_not_found",
        message: "La tarea no existe",
      },
    });
  }

  const { name, completed } = req.body;

  const taskUpdated = { id, name, completed };

  tasks = tasks.map((task) => {
    if (task.id === id) return taskUpdated;
    return task;
  });

  return res.status(200).json(taskUpdated);
});

module.exports = router;
