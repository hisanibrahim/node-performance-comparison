const express = require('express');
const app = express();

app.use('/', (req, res) => {
 return res.send('Hello');
})

app.listen(4400, () => {});
