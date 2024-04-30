const express = require("express");
const app = express();
require('dotenv').config();
const db = require("./db/connection");
const JobRouters = require("./routers/JobRouters");

const PORT = process.env.PORT;

app.use(express.json());
app.use('/jobs', JobRouters);

db
  .authenticate()
  .then(() => {
    console.log("Conectou ao banco com sucesso");

    app.listen(PORT, function() {
      console.log(`O Express está rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.log("Ocorreu um erro ao conectar", err);
  });
