var fs = require("fs");
var http = require("http");

// const protocolo = (req, res) => {
//     let urls = req.url;
//     urls = urls.slice(1);
//     try {
//         const myHtml = fs.readFileSync(`./images/${urls}_doge.jpg`);
//         console.log(myHtml)
//         console.log(`./images/${urls}_doge.jpg`);
//         res.writeHead(200, { "Content-type": "image/jpeg" });
//         res.end(myHtml);
//     } catch (err) {
//         res.writeHead(404, { "Content-type": "text/plain" });
//         res.end('error lasdasdasddas');
//     }

// };
// http.createServer(protocolo).listen(3000, "localhost");

http
  .createServer((req, res) => {
    if (req.url === "/arcoiris_doge") {
      res.writeHead(200, { "Content-type": "image/jpg" });
      const imagen = fs.readFileSync("./images/arcoiris_doge.jpg");
      res.end(imagen);
    }

    if (req.url === "/badboy_doge") {
      res.writeHead(200, { "Content-type": "image/jpg" });
      const imagen = fs.readFileSync("./images/badboy_doge.jpg");
      res.end(imagen);
    }
    if (req.url === "/code_doge") {
      res.writeHead(200, { "Content-type": "image/jpg" });
      const imagen = fs.readFileSync("./images/code_doge.jpg");
      res.end(imagen);
    }
    if (req.url === "/resaca_doge") {
      res.writeHead(200, { "Content-type": "image/jpg" });
      const imagen = fs.readFileSync("./images/resaca_doge.jpg");
      res.end(imagen);
    }
    if (req.url === "/retrato_doge") {
      res.writeHead(200, { "Content-type": "image/jpg" });
      const imagen = fs.readFileSync("./images/retrato_doge.jpg");
      res.end(imagen);
    }

    if (req.url === "/sexy_doge") {
      res.writeHead(200, { "Content-type": "image/jpg" });
      const imagen = fs.readFileSync("./images/sexy_doge.jpg");
      res.end(imagen);
    } else {
      res.writeHead(404, { "Content-type": "plain/text" });
      res.end("error nout found");
    }
  })
  .listen(3001, "localhost");