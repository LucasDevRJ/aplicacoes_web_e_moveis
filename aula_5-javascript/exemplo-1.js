var http = require("http");
var arquivo = require("fs");

var nomeArquivo = process.argv[2];

if (nomeArquivo == '' || nomeArquivo == null) {
    console.log("\nFaltou nome o nome do arquivo html!");
} else {
    http.createServer(function(requisicao, resposta) {
        arquivo.readFile(nomeArquivo, function(err, data) {
            resposta.writeHead(200, {"Content-Type":"text/html"});
            resposta.write(data);
            return resposta.end();
        });
    }).listen(5555);
}

console.log("Servidor Node executando a porta[5555]");