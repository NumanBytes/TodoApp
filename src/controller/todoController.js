import todosModel from "../model/todo.js";
let getNextTodoId;
async function getAllTodos(req, res) {
  res.json(await todosModel.find());
}

function createTodo(req, res) {
  const newTodo = {
    id: getNextTodoId(), // implement to generate unique ID
    title: req.body.title,
    description: req.body.description,
    completed: false
  };
  
  todosModel.push(newTodo);  //Assuming todosModel is an array
  res.status(201).json(newTodo);
}

function getTodoById(req, res) {
  const todoId = parseInt(req.params.id);
  const todo = todosModel.find((todo) => todo.id === todoId);
  if (todo) {
    res.json(todo);
  } else {
    res.status(404).json({ message: "Todo not found" });
  }
}

function updateTodoById(req, res) {
  const todoId = parseInt(req.params.id);
  const todo = todosModel.find((item) => item.id === todoId);
  if (todo) {
    todo.title = req.body.title || todo.title;
    todo.description = req.body.description || todo.description;
    todo.completed =
      req.body.completed !== undefined ? req.body.completed : todo.completed;
    res.json(todo);
  } else {
    res.status(404).json({ message: "todos not found" });
  }
}

function deleteTodoById(req, res) {
  const todoId = parseInt(req.params.id);
  const index = todosModel.findIndex((item) => item.id === todoId);
  if (index !== -1) {
    todosModel.splice(index, 1);
    res.json({ message: "todos deleted" });
  } else {
    res.status(400).json({ message: "todos not found " });
  }
}

export default {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodoById,
  deleteTodoById,
};
