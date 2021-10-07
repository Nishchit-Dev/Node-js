const express = require('express');

const app = express();

const arr = [];
var count = 0;
app.get('/', (req, res) => {
    res.send("/")
    res.end();
})

app.get('/add', (req, res) => {
    res.send("/add")
})

app.get('/multiply', (req, res) => {
    res.send("/multiply")
})

app.get('/su9b', (req, res) => {
    res.send("/sub")
})

app.get('/adds/:a', (req, res) => {
    res.send(req.params.a);
})
const porT = process.env.PORT || 3000;

app.listen(porT, () => {
    console.log(`server is quietly listening on ${porT}`)
})