//  Importando e inicializando o módulo 'express'
const express = require("express"),
  app = express(),
  methodOverride = require("method-override"),
  path = require("path"),
  indexRoutes = require("./src/routes");

//Importando o method-override para lidar com forms put/delete
//*?_method=PUT

app.use(methodOverride("_method"));

// Configurando  recebimento de JSON
app.use(express.json());
//Configurando recebimento de formulário
app.use(express.urlencoded({ extended: false }));
//Definir a pasta de arquivos estáticos
app.use(express.static(path.resolve("public")));

// INSTANCIANDO ROTAS

app.use("/", indexRoutes);

// Definindo View Engine
app.set("view engine", "ejs");
//Definindo Pasta Views
app.set("views", path.resolve("src", "views"));

//Definindo escuta de porta para iniciar o servidor
app.listen(3000, () => {
  console.log("O Servidor está rodando na porta 3000 ");
});
