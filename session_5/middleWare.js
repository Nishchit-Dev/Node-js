const express = require('express')
const app = express()
const logger = require('./middleWareFunction')
const morgan = require('morgan')
const helmet = require('helmet')
const config = require('config')

app.use(express.json())
app.use(logger)
app.use(helmet())
app.use(express.static('public'))
app.use(morgan('tiny'))


// config 

console.log("app name: " + config.get('name'))
console.log("app name: " + config.get('mail.host'))
console.log("app name: " + config.get('mail.password'))

app.get('/api', (req, res) => {
    res.send("its the response")
})
app.listen(8000, () => {
    console.log("server is listening to the port 3000")
})