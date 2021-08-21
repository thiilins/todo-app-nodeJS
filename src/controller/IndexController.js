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
  editTodo: (req, res) => {
    let id = req.params.id;
    let todo = todoModel.editTodo(id);
    const formatPtBR = todoModel.formatStatusPtBR;
    res.render("page/edit", { todo, formatPtBR });
  },
  updateTodo: (req, res) => {
    let id = req.params.id;
    let { title, content, status } = req.body;
    todoModel.updateTodo(id, title, content, status);
    return res.redirect("/");
  },
  updateStatus: (req, res) => {
    let id = req.params.id;
    let status = req.body.status;
    todoModel.changeStatus(id, status);
    return res.redirect("/");
  },
};
module.exports = IndexController;
