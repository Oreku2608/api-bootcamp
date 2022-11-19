import express from "express";
import cors from "cors";
import taskRouter from "./constrollers/task-controller";

const app = express();
app.use(express.json());
app.use(cors());

app.use("/tasks", taskRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Running on port" + PORT);
});
