import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: false,
  },
});

const todosModel = mongoose.model("todos", todoSchema);

// await todosModel.create({
//   title : "one workspace",
//   description: "One workspace for all",
//   completed: false,
// });

export default todosModel;
