import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todosModel = mongoose.model("todos", todosSchema);

await todosModel.create({
  title : "one workspace",
  description: "One workspace for all",
  completed: false,
});

export default todosModel;