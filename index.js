const express = require("express");
const http = require('http')
const http2 = require("http2")
const path = require("path");
var compression = require('compression')
const fs = require("fs")
const spdy = require('spdy')

const app = express();
app.use(compression({level: 9}));

const staticPath = path.join(__dirname, 'public');
const indexPath = path.join(__dirname, 'public/index.html');
app.use('/', express.static(staticPath));
app.get('/', (req, res) => {
  res.sendFile(indexPath);
});
app.get('/*', (req, res) => {
  res.redirect("/");
});

const port = 3000;
const options = {
  key: fs.readFileSync(__dirname + '/localhost+2-key.pem'),
  cert:  fs.readFileSync(__dirname + '/localhost+2.pem')
}
spdy
  .createServer(options, app)
  .listen(port, (error) => {
    if (error) {
      console.error(error)
      return process.exit(1)
    } else {
      console.log('Listening on port: ' + port + '.')
    }
  })

