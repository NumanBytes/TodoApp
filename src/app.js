import express from "express";
import router from "./router/todo.js";
// import todoController from "./controller/todoController.js";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json());

connectDB();
app.use("/", router);

// app.get("/todos", todoController.getAllTodos);
// app.get("/todos/:id", todoController.getTodoById);
// app.get("/todos", todoController.createTodo);
// app.get("/todos/:id", todoController.updateTodoById);
// app.get("/delete-to/:id", todoController.deleteTodoById);

app.listen(3300, () => {
  console.log("Server is listening on port 3300");
});
