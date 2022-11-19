const express = require("express");
const taskRouter = require("./constrollers/task-controller");

const app = express();
app.use(express.json());

// shorturl.at/LQRUV
app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log("Running on port 3000");
});
