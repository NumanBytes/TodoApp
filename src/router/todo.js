import express from "express";

const router = express.Router();

// Import the todo controller
import todoController from "../controller/todoController.js";

// define routes
router.get("/todos", todoController.getAllTodos);
router.get("/todos/:id", todoController.getTodoById);
router.post("/todos", todoController.createTodo);
router.put("/todos/:id", todoController.updateTodoById);
router.delete("/todos/:id", todoController.deleteTodoById);

export default router;