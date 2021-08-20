const express = require("express");
const router = express.Router();
const IndexController = require("../controller/IndexController");

router.get("/", IndexController.index);
router.post("/add-todo", IndexController.addTodo);
router.delete("/delete-item/:id", IndexController.removeTodo);
module.exports = router;
