import express from "express";
import cors from "cors";
import taskRouter from "./constrollers/task-controller";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/tasks", taskRouter);

app.listen(3000, () => {
  console.log("Running on port 3000");
});
