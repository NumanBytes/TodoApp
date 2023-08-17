import todosModel from "../model/todo.js";

const todoController = {
  getall: async (req, res) => {
    try {
      const todo = await todosModel.find();
      res.json(todo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },
  create: async (req, res) => {
    try {
      const todo = await todosModel.create({
        title: req.body.title,
        description: req.body.description,
        completed: req.body.completed,
      });
      res.json(todo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server error" });
    }
  },

  update: async (req, res) => {
    try {
      const todoId = await parseInt(req.params.id);
      const updatedTodo = await todosModel.findByIdAndUpdate(
        todoId,
        {
          title: req.body.title,
          description: req.body.description,
          completed: req.body.completed,
        },
        { new: true }
      );
      if (!updatedTodo) {
        return res.json.status(500).json({ message: "Todo not found" });
      }
      res.json(updatedTodo);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server not found" });
    }
  },

  delete: async (req, res) => {
    try {
      const todoId = req.params.id;
      const deleteTodo = await todosModel.findByIdAndDelete(todoId);
      if (!deleteTodo) {
        return res.status(404).json({message: 'todo not found'});
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Server Error" });
    }
  },
};

export default todoController;
