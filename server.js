const http = require("node:http");
const fs = require("node:fs");
const myPort = 3000;
let data = "Hello WOrld";

const myServer = http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>This is a Home Page</h1>`);
  } else if (req.url == "/about") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>This is a About Page</h1>`);
  } else if (req.url == "/contact") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(`<h1>This is a Contact Page</h1>`);
  } else if (req.url == "/file-write") {
    fs.writeFile("demo.txt", data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log("File written successfully\n");
        console.log("The written has the following contents:");
        console.log(fs.readFileSync("demo.txt", "utf8"));
      }
    });
  }
  res.end();
});

myServer.listen(myPort, () => {
  console.log(`Server Is Running at ${myPort}`);
});
