const express = require('express');
const Joi = require('joi');
const joi = require('joi');
const app = express();


app.use(express.json);

const courses = [
    { id: 1, name: 'hello' },
    { id: 2, name: 'hey' },
]
app.get('/api', (req, res) => {
    res.send("hello")
    res.end();
})
app.post('/api/course', (req, res) => {
    const schema = {
        name: joi.string().min(3).required()
    }
    const result = joi.valid(req.body, schema);
    console.log(result)
    const course = {
        id: course.length + 1,
        name: req.body.name
    }
    courses.push(course);
    res.send(course);
})

app.put('/api/course/:id', (req, res) => {
    // look up to course
    // if not exist , return 404

    // validate 
    // if invalid restrun 404 - bad req

    // update the course
    // return the updated course to client
})

app.listen(3000, () => { console.log("server is listening to port 3000...") })