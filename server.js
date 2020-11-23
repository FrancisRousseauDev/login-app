const express = require('express');

const app = express();

app.use(express.static('./dist/loginApp'));

app.get('/*', (req, res) =>
  res.sendFile('index.html', {root: 'dist/loginApp/'}),
);

app.listen(process.env.PORT || 8080);
