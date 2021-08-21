const express = require("express");
const router = express.Router();
const IndexController = require("../controller/IndexController");

router.get("/", IndexController.index);
router.post("/adicionar", IndexController.addTodo);
router.delete("/excluir/:id", IndexController.removeTodo);
router.get("/editar/:id", IndexController.editTodo);
router.put("/atualizar/:id", IndexController.updateTodo);
router.put("/alterar-status/:id", IndexController.updateStatus);
module.exports = router;
