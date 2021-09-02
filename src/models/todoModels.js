const { v4: uuid } = require("uuid");
const todoJson = require("../database/todos.json");
const fs = require("fs");
const path = require("path");
const todoModel = {
  todoList: todoJson,
  addTodo(title, content, status) {
    let newTodo = {
      id: uuid(),
      title,
      content,
      status,
    };
    this.todoList.push(newTodo);
    this.updateJSONdb();
    return;
  },
  removeTodo(id) {
    const newTodoList = this.todoList.filter((todo) => todo.id !== id);
    if (newTodoList.length >= this.todoList.length) return false;
    this.todoList = newTodoList;
    this.updateJSONdb();
    return true;
  },
  formatStatusPtBR(status) {
    if (status == "open") {
      return "Aberto";
    } else if (status == "progress") {
      return "Em Progresso";
    } else if (status == "closed") {
      return "Finalizado";
    }
  },
  updateTodo(id, title, content, status) {
    this.todoList.forEach((todo, index) => {
      if (todo.id == id) {
        this.todoList[index] = {
          id,
          title,
          content,
          status,
        };
      }
      return;
    });
    this.updateJSONdb();
  },
  changeStatus(id, status) {
    this.todoList.forEach((todo, index) => {
      if (todo.id == id) {
        this.todoList[index].status = status;
      }
    });
    this.updateJSONdb();
    return;
  },
  editTodo(id) {
    let todoEditable = {};
    this.todoList.forEach((todo, index) => {
      if (todo.id == id) {
        todoEditable = this.todoList[index];
      }
    });
    return todoEditable;
  },
  updateJSONdb() {
    const jsonFile = JSON.stringify(this.todoList);
    fs.writeFileSync(path.resolve("src", "database", "todos.json"), jsonFile);
  },
};
module.exports = todoModel;
