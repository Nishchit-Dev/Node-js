const express = require('express')
const app = express()

app.set('view engine', 'pub')
app.set('views', './views') // default 

app.get('/', (req, res) => {
    res.render('index', { title: 'Express app', message: 'hello' })
})

app.listen(3000)