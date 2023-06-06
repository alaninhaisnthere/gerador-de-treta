const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "lista01",
  database: "geradordepalavras",
});

app.use(express.json());
app.use(cors());

app.get("/palavra", (req, res) => {
  let mysql = "SELECT palavra FROM tbl_palavras ORDER BY RAND() LIMIT 1";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erro ao obter a palavra.");
    } else {
      console.log(result);
      const palavra = result[0].palavra;
      res.send(palavra);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});
