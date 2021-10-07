const express = require('express');
const joi = require('joi');
const app = express();

const obj = [
    { id: 1, name: "nishchit" },
    { id: 2, name: "virag" }
]
app.get('/', (req, res) => {
    res.send("hello this is server");
})

app.post('/api/course', (req, res) => {
    const schema = joi.object({
        name: joi.string().min(3).required()
    })
    const value = {
        name: req.body.name
    }

    const result = schema.validate(value);
    console.log(result)
    res.send(result)
})
app.get('/api/course/:id', (req, res) => {
    res.send(req.params.id);
})

app.get('/api/course/:year/:months', (req, res) => {
    res.send({ year: req.params.year, months: req.params.months, sortby: req.query })
})
app.listen(3000, () => {
    console.log("server is listening to port 3000");
})