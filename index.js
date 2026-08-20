const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json([
    {id: 1, name: 'Jenkins 1'},
    {id: 2, name: 'Jenkins 2'},
    {id: 3, name: 'Jenkins 3'}
  ]);
});

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});