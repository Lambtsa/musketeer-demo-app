const fs = require('fs');
const home = require('./home');
const notFound = require('./not-found');

const styles = fs.readFileSync('./server/public/css/style.css');
const scripts = fs.readFileSync('./server/public/javascript/script.js');
const homeScript = fs.readFileSync('./server/public/javascript/home.js');
const localImg = fs.readFileSync('./server/public/assets/snippet.png');
const splitImg = fs.readFileSync('./server/public/assets/split-img.png');
const searchImg = fs.readFileSync('./server/public/assets/search.png');
const prosImg = fs.readFileSync('./server/public/assets/pros-cons.png');

const all = (req, res) => {
  const path = req.url;

  if (path === '/') {
    home.route(req, res);
  } else if (path === '/style.css') {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/css');
    res.end(styles);
  } else if (path === '/assets/snippet.png') {
    res.statusCode = 200;
    res.setHeader('content-type', 'image/png');
    res.end(localImg);
  } else if (path === '/assets/split-img.png') {
    res.statusCode = 200;
    res.setHeader('content-type', 'image/png');
    res.end(splitImg);
  } else if (path === '/assets/search.png') {
    res.statusCode = 200;
    res.setHeader('content-type', 'image/png');
    res.end(searchImg);
  } else if (path === '/assets/pros-cons.png') {
    res.statusCode = 200;
    res.setHeader('content-type', 'image/png');
    res.end(prosImg);
  } else if (path === '/script.js') {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/javascript');
    res.end(scripts);
  } else if (path === '/home.js') {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/javascript');
    res.end(homeScript);
  } else {
    notFound.route(req, res);
  }
};

module.exports.all = all;
