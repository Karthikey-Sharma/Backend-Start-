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
                    res.statusCode=200;
                    break;
          case '/about':
                    path += '/about.html';
                    res.statusCode=200;
                    break;
          case '/about-me':
                     res.statusCode = 301; // redirection
                    res.setHeader('Location', '/about');
                    res.end();
                    break;
          default:
                    path += '/404.html';
                    res.statusCode=404;
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
// local host ip adress => 127.0.0.1
server.listen(3000, 'localhost', () => {
  console.log("Server is listening on port 3000");
});
