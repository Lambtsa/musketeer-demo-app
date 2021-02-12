const express = require('express');

const app = express();

app.use(express.static('public'));

const port = 8080;
app.listen(port, () => {
  /* eslint-disable-next-line */
  console.log(`Server is listening at port ${port}`);
})
