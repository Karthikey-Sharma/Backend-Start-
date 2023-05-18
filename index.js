const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log("Request has been made from the browser to the server");
//   console.log(req.method);
//   console.log(req.url);

  res.setHeader('Content-Type', 'text/html');
  let path = './views';
  switch(req.url){
          case '/':
                    path += '/index.html';
                    break;
          case '/about':
                    path += '/about.html';
                    break;
          default:
                    path += '/404.html';
  };

  fs.readFile(path, (err, fileData) => {
    if (err) {
      console.log(err);
    } else {
      //res.write(fileData);
      res.end(fileData);
    }
    
  });
});

server.listen(3000, 'localhost', () => {
  console.log("Server is listening on port 3000");
});
