console.log("Express Tutorial");

const http = require("http");
const { readFileSync } = require("fs");
const homePage = readFileSync("./lemonholidays/index.html");
const homeStyles = readFileSync("./lemonholidays/style.css");
const homeJS = readFileSync("./navbar-app/logo.svg");
const homeImage = readFileSync("./lemonholidays/app1.js");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  //styles for home page
  else if (url === "/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyles);
    res.end();
  }
  //logo
  else if (url === "/logo.svg") {
    res.writeHead(200, { "content-type": "image/svg+xml" });
    res.write(homeImage);
    res.end();
  }
  //logic
  else if (url === "/app1.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeJS);
    res.end();
  }
});

server.listen(5000);
