const todoModel = require("../models/todoModels");
const IndexController = {
  index: (req, res) => {
    const formatPtBR = todoModel.formatStatusPtBR;
    res.render("page/index", {
      todoItem: todoModel.todoList,
      formatPtBR: formatPtBR,
    });
  },
  addTodo: (req, res) => {
    let { title, content, status } = req.body;
    todoModel.addTodo(title, content, status);
    return res.redirect("/");
  },
  removeTodo: (req, res) => {
    let { id } = req.params;
    const response = todoModel.removeTodo(id);
    !response
      ? res.send("Oops! Algo não saiu como esperado")
      : res.redirect("/");
  },
};
module.exports = IndexController;
