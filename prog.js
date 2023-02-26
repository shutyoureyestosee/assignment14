const http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/pets') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const pets = [
      {
        name: "Meowsy",
        type: "cat",
        likes: ["tuna", "catnip"],
        dislikes: ["ham", "zucchini"]
      },
      {
        name: "Barky",
        type: "dog",
        likes: ["bones", "carrots"],
        dislikes: ["tuna"]
      },
      {
        name: "Purrpaws",
        type: "cat",
        likes: ["mice"],
        dislikes: ["cookies"]
      }
    ];
    res.end(JSON.stringify(pets));
  } else {
    fs.readFile('index.html', function(err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/html'});
        return res.end("404 Not Found");
      } 
      res.writeHead(200, {'Content-Type': 'text/html'});
      res.write(data);
      return res.end();
    });
  }
}).listen(8080);


