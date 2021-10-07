const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hello world')
})
app.get('/api/course', (req, res) => {

    res.send([1, 2, 3, 4, 5, 6, 7, 8]);

})
const port = 8080;
app.listen(port, () => {
    console.log('hello the server is listening')
})