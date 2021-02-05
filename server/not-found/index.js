const route = (req, res) => {
  const notWelcome = {
    message: 'You are in the wrong place buddy!',
  };
  res.statusCode = 404;
  res.setHeader('content-type', 'application/json');
  res.end(JSON.stringify(notWelcome));
};

module.exports.route = route;
