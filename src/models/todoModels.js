const { v4: uuid } = require("uuid");
const todoModel = {
  todoList: [
    {
      id: "97f2016b-643c-4cf7-8128-6157576ebf8e",
      title: "Titulo 1",
      content:
        " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: "open",
    },
    {
      id: "7884b8e4-63d5-4f45-8807-604b20510559",
      title: "Titulo 2",
      content:
        "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: "progress",
    },
    {
      id: "27b709ff-163e-4d6f-a581-6accb02cb406",
      title: "Titulo 3",
      content:
        " is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      status: "closed",
    },
  ],
  addTodo(title, content, status) {
    let newTodo = {
      id: uuid(),
      title,
      content,
      status,
    };
    this.todoList.push(newTodo);
  },
  removeTodo(id) {
    const newTodoList = this.todoList.filter((todo) => todo.id !== id);
    if (newTodoList.length >= this.todoList.length) return false;
    this.todoList = newTodoList;
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
    });
  },
  changeStatus(id, status) {
    this.todoList.forEach((todo, index) => {
      if (todo.id == id) {
        this.todoList[index].status = status;
      }
    });
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
};
module.exports = todoModel;
