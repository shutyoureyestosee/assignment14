const http = require('http');
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

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('<!DOCTYPE html>');
  res.write('<html>');
  res.write('<head>');
  res.write('<title>JSON and AJAX</title>');
  res.write('</head>');
  res.write('<body>');
  res.write('<h1>JSON and AJAX</h1>');
  res.write('<button onclick="fetchContent()">Fetch the content</button>');
  res.write('<div id="content"></div>');
  res.write('<script>');
  res.write('function fetchContent() {');
  res.write('const pets = ' + JSON.stringify(pets) + ';');
  res.write('let content = "";');
  res.write('pets.forEach(pet => {');
  res.write('content += `${pet.name} is a ${pet.type} that likes to eat ${pet.likes.join(" and ")} and dislikes ${pet.dislikes.join(" and ")}.<br>`;');
  res.write('});');
  res.write('document.getElementById("content").innerHTML = content;');
  res.write('}');
  res.write('</script>');
  res.write('</body>');
  res.write('</html>');
  return res.end();
}).listen(8080);
