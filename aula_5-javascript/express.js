var express = require("express");
var porta = "8080";

var app = express();

app.get("/", function(req, res) {
    res.send("<h1>Site principal</h1>");
});

app.get("/aula", function(req, res) {
    res.send("<h1>Aula com Node JS!!!</h1>");
});

app.get("/sobre", function(req, res) {
    res.send("<h1>Mostra informações sobre sistema!</h1>");
});

app.listen(porta, function() {
    console.log("Servidor na porta: ", porta);
});