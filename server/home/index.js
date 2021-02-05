const fs = require('fs');

const rootHtml = fs.readFileSync('./server/public/index.html');

const route = (req, res) => {
  if (req.method !== 'GET') {
    const message = { message: 'You can only make GET requests 📩' };
    res.statusCode = 405;
    res.setHeader('allow', 'GET');
    res.setHeader('content-type', 'application/json');
    res.end(JSON.stringify(message));
  } else {
    res.statusCode = 200;
    res.setHeader('content-type', 'text/html');
    res.end(rootHtml);
  }
};

module.exports.route = route;
