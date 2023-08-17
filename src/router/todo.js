import express from "express";
const router = express.Router();

import todoController from "../controller/todoController.js";

console.log("sending request");
// Import the todo controller

// define routes
router.get("/todos", todoController.getall);
router.post("/create-todos", todoController.create);
router.put("/update-todos", todoController.update);
router.delete("/delete-todos", todoController.delete);

export default router;
