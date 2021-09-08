const port = 3000;
const express = require("express"),
  app = express(),
  methodOverride = require("method-override"),
  path = require("path"),
  indexRoutes = require("./src/routes");

app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

app.use(methodOverride("_method"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.resolve("src", "public")));
app.use("/", indexRoutes);

app.listen(port, () => {
  console.log(`O servidor está rodando em http://localhost:${port}`);
});
