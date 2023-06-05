var http = require("http");
var url = require("url");
var os = require("os");

http.createServer(function (req, res) {
    var q = url.parse(req.url, true);
    var info = q.pathname;

    if (info == "/info") {
        res.writeHead(200, {"Content-Type": "text/html"});
        let informacoes = "SO: " + os.platform() + "<br>"
        + "CPU: " + os.arch() + "<br>"
        + "MEM: " + os.freemem() + "<br>"
        + "UPTIME: " + os.uptime() + "<br>"
        + "USUARIO: " + os.userInfo().username + "<br>"
        + "PASTA INICIAL: " + os.userInfo().homedir + "<br>";

        console.log(os.userInfo());
        res.write(informacoes);
        res.end();
    } else {
        res.writeHead(200, {"Content-Type":"text/html"});
        res.write("<h1>Sem informacoes</h1>");
        res.end();
    }
}).listen(8080);

console.log("Início...");