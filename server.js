const express = require('express');
const { resolve } = require('path');

const app = express();

app.use('/', express.static(resolve(__dirname, './build', "index.html")));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server is running');
  }
});
